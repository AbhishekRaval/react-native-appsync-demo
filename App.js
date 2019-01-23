import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Amplify from "aws-amplify";
import { awsUserPool as awsConfig, awsAppSync as appSyncConfig } from "./aws-exports";
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";
import { ApolloProvider } from "react-apollo";
Amplify.configure(awsConfig);
import { withAuthenticator } from "aws-amplify-react-native";
import Tabs from "./src/Tabs";

const client = new AWSAppSyncClient({
  url: appSyncConfig.graphqlEndpoint,
  region: appSyncConfig.region,
  auth: {
    type: appSyncConfig.authType,
    apiKey: appSyncConfig.apiKey,
  },
});

const WithProvider = () => (
  <ApolloProvider client={client} styles={styles}>
    <Rehydrated>
      <Tabs />
    </Rehydrated>
  </ApolloProvider>
);

export default withAuthenticator(WithProvider, (WithProviderincludeGreetings = true));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
