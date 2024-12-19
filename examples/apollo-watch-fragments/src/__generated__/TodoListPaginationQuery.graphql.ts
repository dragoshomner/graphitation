/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { FragmentRefs } from "@graphitation/apollo-react-relay-duct-tape";
export type SortDirection = "ASC" | "DESC";
export type SortField = "DESCRIPTION" | "IS_COMPLETED";
export type SortByInput = {
    sortDirection: SortDirection;
    sortField: SortField;
};
export type TodoListPaginationQueryVariables = {
    after: string;
    count: number;
    includeSomeOtherField?: boolean | null | undefined;
    showCompletedOnly?: boolean | null | undefined;
    sortBy?: SortByInput | null | undefined;
    id: string;
};
export type TodoListPaginationQueryResponse = {
    readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"TodoList_nodeFragment">;
    } | null;
};
export type TodoListPaginationQuery = {
    readonly response: TodoListPaginationQueryResponse;
    readonly variables: TodoListPaginationQueryVariables;
};


/*
query TodoListPaginationQuery($after: String! = "", $count: Int! = 5, $includeSomeOtherField: Boolean, $showCompletedOnly: Boolean, $sortBy: SortByInput = {sortField: DESCRIPTION, sortDirection: ASC}, $id: ID!) {
  node(id: $id) {
    __typename
    ...TodoList_nodeFragment_4nog9O
    id
  }
}

fragment TodoList_nodeFragment_4nog9O on NodeWithTodos {
  __isNodeWithTodos: __typename
  __typename
  todos(
    first: $count
    after: $after
    sortBy: $sortBy
    showCompletedOnly: $showCompletedOnly
  ) @connection(key: "TodosList_todos", filter: ["sortBy", "showCompletedOnly"]) {
    edges {
      node {
        id
        isCompleted
        ...Todo_todoFragment
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
    id
  }
  id
}

fragment Todo_todoFragment on Todo {
  id
  description
  isCompleted
  someOtherField @include(if: $includeSomeOtherField)
}
*/

/*
query TodoListPaginationQuery($after: String! = "", $count: Int! = 5, $includeSomeOtherField: Boolean, $showCompletedOnly: Boolean, $sortBy: SortByInput = {sortField: DESCRIPTION, sortDirection: ASC}, $id: ID!) {
  node(id: $id) {
    __typename
    ...TodoList_nodeFragment_4nog9O
    id
    ... on Node {
      __fragments @client
    }
  }
}

fragment TodoList_nodeFragment_4nog9O on NodeWithTodos {
  __isNodeWithTodos: __typename
  __typename
  todos(
    first: $count
    after: $after
    sortBy: $sortBy
    showCompletedOnly: $showCompletedOnly
  ) @connection(key: "TodosList_todos", filter: ["sortBy", "showCompletedOnly"]) {
    edges {
      node {
        id
        isCompleted
        __typename
        ... on Node {
          __fragments @client
        }
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
    id
  }
  id
}
*/

export const documents: import("@graphitation/apollo-react-relay-duct-tape-compiler").CompiledArtefactModule = (function(){
var v0 = {
  "kind": "Name",
  "value": "TodoListPaginationQuery"
},
v1 = {
  "kind": "Name",
  "value": "after"
},
v2 = {
  "kind": "Variable",
  "name": (v1/*: any*/)
},
v3 = {
  "kind": "Variable",
  "name": {
    "kind": "Name",
    "value": "count"
  }
},
v4 = {
  "kind": "Variable",
  "name": {
    "kind": "Name",
    "value": "includeSomeOtherField"
  }
},
v5 = {
  "kind": "NamedType",
  "name": {
    "kind": "Name",
    "value": "Boolean"
  }
},
v6 = {
  "kind": "Name",
  "value": "showCompletedOnly"
},
v7 = {
  "kind": "Variable",
  "name": (v6/*: any*/)
},
v8 = {
  "kind": "Name",
  "value": "sortBy"
},
v9 = {
  "kind": "Variable",
  "name": (v8/*: any*/)
},
v10 = {
  "kind": "Name",
  "value": "id"
},
v11 = {
  "kind": "Variable",
  "name": (v10/*: any*/)
},
v12 = [
  {
    "kind": "VariableDefinition",
    "variable": (v2/*: any*/),
    "type": {
      "kind": "NonNullType",
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "String"
        }
      }
    },
    "defaultValue": {
      "kind": "StringValue",
      "value": "",
      "block": false
    }
  },
  {
    "kind": "VariableDefinition",
    "variable": (v3/*: any*/),
    "type": {
      "kind": "NonNullType",
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "Int"
        }
      }
    },
    "defaultValue": {
      "kind": "IntValue",
      "value": "5"
    }
  },
  {
    "kind": "VariableDefinition",
    "variable": (v4/*: any*/),
    "type": (v5/*: any*/)
  },
  {
    "kind": "VariableDefinition",
    "variable": (v7/*: any*/),
    "type": (v5/*: any*/)
  },
  {
    "kind": "VariableDefinition",
    "variable": (v9/*: any*/),
    "type": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "SortByInput"
      }
    },
    "defaultValue": {
      "kind": "ObjectValue",
      "fields": [
        {
          "kind": "ObjectField",
          "name": {
            "kind": "Name",
            "value": "sortField"
          },
          "value": {
            "kind": "EnumValue",
            "value": "DESCRIPTION"
          }
        },
        {
          "kind": "ObjectField",
          "name": {
            "kind": "Name",
            "value": "sortDirection"
          },
          "value": {
            "kind": "EnumValue",
            "value": "ASC"
          }
        }
      ]
    }
  },
  {
    "kind": "VariableDefinition",
    "variable": (v11/*: any*/),
    "type": {
      "kind": "NonNullType",
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "ID"
        }
      }
    }
  }
],
v13 = {
  "kind": "Name",
  "value": "node"
},
v14 = [
  {
    "kind": "Argument",
    "name": (v10/*: any*/),
    "value": (v11/*: any*/)
  }
],
v15 = {
  "kind": "Name",
  "value": "__typename"
},
v16 = {
  "kind": "Field",
  "name": (v15/*: any*/)
},
v17 = {
  "kind": "Name",
  "value": "TodoList_nodeFragment_4nog9O"
},
v18 = {
  "kind": "FragmentSpread",
  "name": (v17/*: any*/)
},
v19 = {
  "kind": "Field",
  "name": (v10/*: any*/)
},
v20 = {
  "kind": "NamedType",
  "name": {
    "kind": "Name",
    "value": "NodeWithTodos"
  }
},
v21 = {
  "kind": "Field",
  "alias": {
    "kind": "Name",
    "value": "__isNodeWithTodos"
  },
  "name": (v15/*: any*/)
},
v22 = {
  "kind": "Name",
  "value": "todos"
},
v23 = [
  {
    "kind": "Argument",
    "name": {
      "kind": "Name",
      "value": "first"
    },
    "value": (v3/*: any*/)
  },
  {
    "kind": "Argument",
    "name": (v1/*: any*/),
    "value": (v2/*: any*/)
  },
  {
    "kind": "Argument",
    "name": (v8/*: any*/),
    "value": (v9/*: any*/)
  },
  {
    "kind": "Argument",
    "name": (v6/*: any*/),
    "value": (v7/*: any*/)
  }
],
v24 = [
  {
    "kind": "Directive",
    "name": {
      "kind": "Name",
      "value": "connection"
    },
    "arguments": [
      {
        "kind": "Argument",
        "name": {
          "kind": "Name",
          "value": "key"
        },
        "value": {
          "kind": "StringValue",
          "value": "TodosList_todos",
          "block": false
        }
      },
      {
        "kind": "Argument",
        "name": {
          "kind": "Name",
          "value": "filter"
        },
        "value": {
          "kind": "ListValue",
          "values": [
            {
              "kind": "StringValue",
              "value": "sortBy",
              "block": false
            },
            {
              "kind": "StringValue",
              "value": "showCompletedOnly",
              "block": false
            }
          ]
        }
      }
    ]
  }
],
v25 = {
  "kind": "Name",
  "value": "edges"
},
v26 = {
  "kind": "Field",
  "name": {
    "kind": "Name",
    "value": "isCompleted"
  }
},
v27 = {
  "kind": "Name",
  "value": "Todo_todoFragment"
},
v28 = {
  "kind": "Field",
  "name": {
    "kind": "Name",
    "value": "cursor"
  }
},
v29 = {
  "kind": "Field",
  "name": {
    "kind": "Name",
    "value": "pageInfo"
  },
  "selectionSet": {
    "kind": "SelectionSet",
    "selections": [
      {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "endCursor"
        }
      },
      {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "hasNextPage"
        }
      }
    ]
  }
},
v30 = {
  "kind": "InlineFragment",
  "typeCondition": {
    "kind": "NamedType",
    "name": {
      "kind": "Name",
      "value": "Node"
    }
  },
  "selectionSet": {
    "kind": "SelectionSet",
    "selections": [
      {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "__fragments"
        },
        "directives": [
          {
            "kind": "Directive",
            "name": {
              "kind": "Name",
              "value": "client"
            }
          }
        ]
      }
    ]
  }
};
return {
  "executionQueryDocument": {
    "kind": "Document",
    "definitions": [
      {
        "kind": "OperationDefinition",
        "operation": "query",
        "name": (v0/*: any*/),
        "variableDefinitions": (v12/*: any*/),
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "Field",
              "name": (v13/*: any*/),
              "arguments": (v14/*: any*/),
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                  (v16/*: any*/),
                  (v18/*: any*/),
                  (v19/*: any*/)
                ]
              }
            }
          ]
        }
      },
      {
        "kind": "FragmentDefinition",
        "name": (v17/*: any*/),
        "typeCondition": (v20/*: any*/),
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            (v21/*: any*/),
            (v16/*: any*/),
            {
              "kind": "Field",
              "name": (v22/*: any*/),
              "arguments": (v23/*: any*/),
              "directives": (v24/*: any*/),
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                  {
                    "kind": "Field",
                    "name": (v25/*: any*/),
                    "selectionSet": {
                      "kind": "SelectionSet",
                      "selections": [
                        {
                          "kind": "Field",
                          "name": (v13/*: any*/),
                          "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                              (v19/*: any*/),
                              (v26/*: any*/),
                              {
                                "kind": "FragmentSpread",
                                "name": (v27/*: any*/)
                              },
                              (v16/*: any*/)
                            ]
                          }
                        },
                        (v28/*: any*/)
                      ]
                    }
                  },
                  (v29/*: any*/),
                  (v19/*: any*/)
                ]
              }
            },
            (v19/*: any*/)
          ]
        }
      },
      {
        "kind": "FragmentDefinition",
        "name": (v27/*: any*/),
        "typeCondition": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Todo"
          }
        },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            (v19/*: any*/),
            {
              "kind": "Field",
              "name": {
                "kind": "Name",
                "value": "description"
              }
            },
            (v26/*: any*/),
            {
              "kind": "Field",
              "name": {
                "kind": "Name",
                "value": "someOtherField"
              },
              "directives": [
                {
                  "kind": "Directive",
                  "name": {
                    "kind": "Name",
                    "value": "include"
                  },
                  "arguments": [
                    {
                      "kind": "Argument",
                      "name": {
                        "kind": "Name",
                        "value": "if"
                      },
                      "value": (v4/*: any*/)
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    ]
  },
  "watchQueryDocument": {
    "kind": "Document",
    "definitions": [
      {
        "kind": "OperationDefinition",
        "operation": "query",
        "name": (v0/*: any*/),
        "variableDefinitions": (v12/*: any*/),
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "Field",
              "name": (v13/*: any*/),
              "arguments": (v14/*: any*/),
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                  (v16/*: any*/),
                  (v18/*: any*/),
                  (v19/*: any*/),
                  (v30/*: any*/)
                ]
              }
            }
          ]
        }
      },
      {
        "kind": "FragmentDefinition",
        "name": (v17/*: any*/),
        "typeCondition": (v20/*: any*/),
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            (v21/*: any*/),
            (v16/*: any*/),
            {
              "kind": "Field",
              "name": (v22/*: any*/),
              "arguments": (v23/*: any*/),
              "directives": (v24/*: any*/),
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                  {
                    "kind": "Field",
                    "name": (v25/*: any*/),
                    "selectionSet": {
                      "kind": "SelectionSet",
                      "selections": [
                        {
                          "kind": "Field",
                          "name": (v13/*: any*/),
                          "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                              (v19/*: any*/),
                              (v26/*: any*/),
                              (v16/*: any*/),
                              (v30/*: any*/)
                            ]
                          }
                        },
                        (v28/*: any*/)
                      ]
                    }
                  },
                  (v29/*: any*/),
                  (v19/*: any*/)
                ]
              }
            },
            (v19/*: any*/)
          ]
        }
      }
    ]
  },
  "metadata": {
    "rootSelection": "node",
    "mainFragment": {
      "name": "TodoList_nodeFragment_4nog9O",
      "typeCondition": "NodeWithTodos"
    },
    "connection": {
      "selectionPath": [
        "todos"
      ],
      "forwardCountVariable": "count",
      "forwardCursorVariable": "after",
      "filterVariableDefaults": {
        "sortBy": {
          "sortField": "DESCRIPTION",
          "sortDirection": "ASC"
        }
      }
    }
  }
};
})();

export default documents;