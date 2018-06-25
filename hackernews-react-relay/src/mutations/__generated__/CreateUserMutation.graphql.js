/**
 * @flow
 * @relayHash b7673fe39d2b44b6bac7d0f190bc0075
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignupUserInput = {
  name: string,
  linksIds?: ?$ReadOnlyArray<string>,
  links?: ?$ReadOnlyArray<UserlinksLink>,
  votesIds?: ?$ReadOnlyArray<string>,
  votes?: ?$ReadOnlyArray<UservotesVote>,
  clientMutationId: string,
};
export type UserlinksLink = {
  description: string,
  url: string,
  votesIds?: ?$ReadOnlyArray<string>,
  votes?: ?$ReadOnlyArray<LinkvotesVote>,
};
export type LinkvotesVote = {
  userId?: ?string,
  user?: ?VoteuserUser,
};
export type VoteuserUser = {
  name: string,
  linksIds?: ?$ReadOnlyArray<string>,
  links?: ?$ReadOnlyArray<UserlinksLink>,
  votesIds?: ?$ReadOnlyArray<string>,
  votes?: ?$ReadOnlyArray<UservotesVote>,
};
export type UservotesVote = {
  linkId?: ?string,
  link?: ?VotelinkLink,
};
export type VotelinkLink = {
  description: string,
  url: string,
  postedById?: ?string,
  postedBy?: ?LinkpostedByUser,
  votesIds?: ?$ReadOnlyArray<string>,
  votes?: ?$ReadOnlyArray<LinkvotesVote>,
};
export type LinkpostedByUser = {
  name: string,
  linksIds?: ?$ReadOnlyArray<string>,
  links?: ?$ReadOnlyArray<UserlinksLink>,
  votesIds?: ?$ReadOnlyArray<string>,
  votes?: ?$ReadOnlyArray<UservotesVote>,
};
export type CreateUserMutationVariables = {|
  createUserInput: SignupUserInput
|};
export type CreateUserMutationResponse = {|
  +createUser: {|
    +user: ?{|
      +id: string
    |}
  |}
|};
*/


/*
mutation CreateUserMutation(
  $createUserInput: SignupUserInput!
) {
  createUser(input: $createUserInput) {
    user {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "createUserInput",
    "type": "SignupUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "createUserInput",
        "type": "SignupUserInput!"
      }
    ],
    "concreteType": "CreateUserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateUserMutation",
  "id": null,
  "text": "mutation CreateUserMutation(\n  $createUserInput: SignupUserInput!\n) {\n  createUser(input: $createUserInput) {\n    user {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateUserMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '77d26776a0cb4da81eb731a5e5c2cae1';
module.exports = node;
