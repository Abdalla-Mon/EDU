"use client";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import React from "react";
import {
  ErrorBoundary,
  Paging,
  PagingInfo,
  Results,
  ResultsPerPage,
  SearchBox,
  SearchProvider,
  WithSearch,
} from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

const connector = new AppSearchAPIConnector({
  searchKey: "search-epvktg6orw2tj42sun1vmgww",
  engineName: "news",
  endpointBase:
    "https://513076c5669b4aa2af5b0cd85cc3a74e.ent-search.us-central1.gcp.cloud.es.io",
});
const config = {
  alwaysSearchOnInitialLoad: true,
  apiConnector: connector,
  hasA11yNotifications: true,
  searchQuery: {
    result_fields: {
      title: { raw: {} },
    },
    search_fields: {
      title: {},
    },
    disjunctiveFacets: [""],
    facets: {},
  },
};

export default function Search() {
  return (
    <SearchProvider config={config}>
      <WithSearch
        mapContextToProps={({ wasSearched }) => ({
          wasSearched,
        })}
      >
        {({ wasSearched }) => {
          return (
            <div className="App">
              <ErrorBoundary>
                <Layout
                  header={<SearchBox debounceLength={0} />}
                  sideContent={<div></div>}
                  bodyContent={
                    <Results
                      titleField="title"
                      urlField="nps_link"
                      thumbnailField="image_url"
                      shouldTrackClickThrough
                    />
                  }
                  bodyHeader={
                    <React.Fragment>
                      {wasSearched && <PagingInfo />}
                      {wasSearched && <ResultsPerPage />}
                    </React.Fragment>
                  }
                  bodyFooter={<Paging />}
                />
              </ErrorBoundary>
            </div>
          );
        }}
      </WithSearch>
    </SearchProvider>
  );
}
