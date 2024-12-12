/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * https://github.com/facebook/relay/blob/b8d2694dbef01f003c4452fa0364f9a7f20245ee/LICENSE
 */

import type { MockResolvers } from "relay-test-utils";
import type { MockResolverContext } from "relay-test-utils/lib/RelayMockPayloadGenerator";

export type { MockResolvers, DefaultMockResolvers } from "relay-test-utils";
export type { MockResolverContext } from "relay-test-utils/lib/RelayMockPayloadGenerator";

export interface MockData {
  __typename?: string;
  [fieldName: string]: unknown;
}

export type ValueResolver = (
  typeName: string | null,
  context: MockResolverContext,
  plural: boolean,
  defaultValue?: unknown,
) => unknown;

export const DEFAULT_MOCK_TYPENAME = "__MockObject";

function createIdGenerator() {
  let id = 0;
  return () => {
    return ++id;
  };
}

export const DEFAULT_MOCK_RESOLVERS: MockResolvers = {
  ID(context, generateId: () => number) {
    return `<${
      context.parentType != null && context.parentType !== DEFAULT_MOCK_TYPENAME
        ? context.parentType + "-"
        : ""
    }mock-id-${generateId()}>`;
  },
  Boolean() {
    return false;
  },
  Int() {
    return 42;
  },
  Float() {
    return 4.2;
  },
};

function valueResolver(
  generateId: () => number,
  mockResolvers: MockResolvers | null,
  typeName: string | null,
  context: MockResolverContext,
  plural = false,
  defaultValue?: unknown,
): unknown {
  const generateValue = (possibleDefaultValue: unknown) => {
    let mockValue;
    const mockResolver =
      typeName != null && mockResolvers != null
        ? mockResolvers[typeName]
        : null;
    if (mockResolver != null) {
      mockValue = mockResolver(context, generateId);
    }
    if (mockValue === undefined) {
      mockValue =
        possibleDefaultValue ??
        (typeName === "ID"
          ? DEFAULT_MOCK_RESOLVERS.ID?.(context, generateId)
          : `<mock-value-for-field-"${
              context.alias ?? context.name ?? "undefined"
            }">`);
    }
    return mockValue;
  };

  return plural === true
    ? generateMockList(
        Array.isArray(defaultValue) ? defaultValue : Array(1).fill(null),
        generateValue,
      )
    : generateValue(defaultValue);
}

export function createValueResolver(
  mockResolvers: MockResolvers | null,
  generateId: () => number = createIdGenerator(),
): ValueResolver {
  return valueResolver.bind(null, generateId, mockResolvers);
}

function generateMockList<T>(
  placeholderArray: ReadonlyArray<unknown>,
  generateListItem: (defaultValue: unknown) => T,
): ReadonlyArray<T> {
  return placeholderArray.map((possibleDefaultValue) =>
    generateListItem(possibleDefaultValue),
  );
}
