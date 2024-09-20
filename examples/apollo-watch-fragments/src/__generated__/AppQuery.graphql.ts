/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { FragmentRefs } from "@graphitation/apollo-react-relay-duct-tape";
export type AppQueryVariables = {
    includeSomeOtherField: boolean;
    showCompletedOnly: boolean;
};
export type AppQueryResponse = {
    readonly me: {
        readonly todoStats: {
            readonly id: string;
            readonly totalCount: number;
            readonly " $fragmentSpreads": FragmentRefs<"TodoListFooter_todosFragment">;
        };
        readonly " $fragmentSpreads": FragmentRefs<"TodoList_nodeFragment">;
    };
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};


/*
query AppQuery($includeSomeOtherField: Boolean!, $showCompletedOnly: Boolean!) {
  me {
    todoStats: todos(first: 0) {
      id
      totalCount
      ...TodoListFooter_todosFragment
    }
    ...TodoList_nodeFragment
    id
  }
}

fragment TodoListFooter_todosFragment on TodosConnection {
  uncompletedCount
  id
}

fragment TodoList_nodeFragment on NodeWithTodos {
  __isNodeWithTodos: __typename
  __typename
  todos(
    first: 5
    after: ""
    sortBy: {sortField: DESCRIPTION, sortDirection: ASC}
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
query AppQuery($includeSomeOtherField: Boolean!, $showCompletedOnly: Boolean!) {
  me {
    todoStats: todos(first: 0) {
      id
      totalCount
      ... on Node {
        __fragments @client
      }
    }
    id
    ... on Node {
      __fragments @client
    }
  }
}
*/

export const documents: import("@graphitation/apollo-react-relay-duct-tape-compiler").CompiledArtefactModule = (function(){
var v0 = {
  "kind": "Name",
  "value": "AppQuery"
},
v1 = {
  "kind": "Variable",
  "name": {
    "kind": "Name",
    "value": "includeSomeOtherField"
  }
},
v2 = {
  "kind": "NonNullType",
  "type": {
    "kind": "NamedType",
    "name": {
      "kind": "Name",
      "value": "Boolean"
    }
  }
},
v3 = {
  "kind": "Name",
  "value": "showCompletedOnly"
},
v4 = {
  "kind": "Variable",
  "name": (v3/*: any*/)
},
v5 = [
  {
    "kind": "VariableDefinition",
    "variable": (v1/*: any*/),
    "type": (v2/*: any*/)
  },
  {
    "kind": "VariableDefinition",
    "variable": (v4/*: any*/),
    "type": (v2/*: any*/)
  }
],
v6 = {
  "kind": "Name",
  "value": "me"
},
v7 = {
  "kind": "Name",
  "value": "todoStats"
},
v8 = {
  "kind": "Name",
  "value": "todos"
},
v9 = {
  "kind": "Name",
  "value": "first"
},
v10 = [
  {
    "kind": "Argument",
    "name": (v9/*: any*/),
    "value": {
      "kind": "IntValue",
      "value": "0"
    }
  }
],
v11 = {
  "kind": "Field",
  "name": {
    "kind": "Name",
    "value": "id"
  }
},
v12 = {
  "kind": "Field",
  "name": {
    "kind": "Name",
    "value": "totalCount"
  }
},
v13 = {
  "kind": "Name",
  "value": "TodoListFooter_todosFragment"
},
v14 = {
  "kind": "Name",
  "value": "TodoList_nodeFragment"
},
v15 = {
  "kind": "Name",
  "value": "__typename"
},
v16 = {
  "kind": "Field",
  "name": (v15/*: any*/)
},
v17 = {
  "kind": "Field",
  "name": {
    "kind": "Name",
    "value": "isCompleted"
  }
},
v18 = {
  "kind": "Name",
  "value": "Todo_todoFragment"
},
v19 = {
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
        "variableDefinitions": (v5/*: any*/),
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "Field",
              "name": (v6/*: any*/),
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                  {
                    "kind": "Field",
                    "alias": (v7/*: any*/),
                    "name": (v8/*: any*/),
                    "arguments": (v10/*: any*/),
                    "selectionSet": {
                      "kind": "SelectionSet",
                      "selections": [
                        (v11/*: any*/),
                        (v12/*: any*/),
                        {
                          "kind": "FragmentSpread",
                          "name": (v13/*: any*/)
                        }
                      ]
                    }
                  },
                  {
                    "kind": "FragmentSpread",
                    "name": (v14/*: any*/)
                  },
                  (v11/*: any*/)
                ]
              }
            }
          ]
        }
      },
      {
        "kind": "FragmentDefinition",
        "name": (v13/*: any*/),
        "typeCondition": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "TodosConnection"
          }
        },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "Field",
              "name": {
                "kind": "Name",
                "value": "uncompletedCount"
              }
            },
            (v11/*: any*/)
          ]
        }
      },
      {
        "kind": "FragmentDefinition",
        "name": (v14/*: any*/),
        "typeCondition": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "NodeWithTodos"
          }
        },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "Field",
              "alias": {
                "kind": "Name",
                "value": "__isNodeWithTodos"
              },
              "name": (v15/*: any*/)
            },
            (v16/*: any*/),
            {
              "kind": "Field",
              "name": (v8/*: any*/),
              "arguments": [
                {
                  "kind": "Argument",
                  "name": (v9/*: any*/),
                  "value": {
                    "kind": "IntValue",
                    "value": "5"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "after"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "",
                    "block": false
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "sortBy"
                  },
                  "value": {
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
                  "kind": "Argument",
                  "name": (v3/*: any*/),
                  "value": (v4/*: any*/)
                }
              ],
              "directives": [
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
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                  {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "edges"
                    },
                    "selectionSet": {
                      "kind": "SelectionSet",
                      "selections": [
                        {
                          "kind": "Field",
                          "name": {
                            "kind": "Name",
                            "value": "node"
                          },
                          "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                              (v11/*: any*/),
                              (v17/*: any*/),
                              {
                                "kind": "FragmentSpread",
                                "name": (v18/*: any*/)
                              },
                              (v16/*: any*/)
                            ]
                          }
                        },
                        {
                          "kind": "Field",
                          "name": {
                            "kind": "Name",
                            "value": "cursor"
                          }
                        }
                      ]
                    }
                  },
                  {
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
                  (v11/*: any*/)
                ]
              }
            },
            (v11/*: any*/)
          ]
        }
      },
      {
        "kind": "FragmentDefinition",
        "name": (v18/*: any*/),
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
            (v11/*: any*/),
            {
              "kind": "Field",
              "name": {
                "kind": "Name",
                "value": "description"
              }
            },
            (v17/*: any*/),
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
                      "value": (v1/*: any*/)
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
        "variableDefinitions": (v5/*: any*/),
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "Field",
              "name": (v6/*: any*/),
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                  {
                    "kind": "Field",
                    "alias": (v7/*: any*/),
                    "name": (v8/*: any*/),
                    "arguments": (v10/*: any*/),
                    "selectionSet": {
                      "kind": "SelectionSet",
                      "selections": [
                        (v11/*: any*/),
                        (v12/*: any*/),
                        (v19/*: any*/)
                      ]
                    }
                  },
                  (v11/*: any*/),
                  (v19/*: any*/)
                ]
              }
            }
          ]
        }
      }
    ]
  }
};
})();

export default documents;