/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
;

/*
query TodoListFooter_todosWatchNodeQuery($id: ID!) {
  node(id: $id) {
    __typename
    ...TodoListFooter_todosFragment
    id
  }
}

fragment TodoListFooter_todosFragment on TodosConnection {
  uncompletedCount
  id
}

*/
export const watchQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TodoListFooter_todosWatchNodeQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TodoListFooter_todosFragment"},"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TodoListFooter_todosFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TodosConnection"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uncompletedCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]};