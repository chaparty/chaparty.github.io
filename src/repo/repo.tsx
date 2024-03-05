
import { Root } from "@/models/types";

export default class Repository {

  async GetAllItems() {

    const requestBody = {
      query: `query withSearchResults(
        $query: String!
        $queryParams: QueryParams
        $locale: String!
        $country: String!
        $currency: String!
        $previewTypeIds: [String!]
        $experience: String
      ) {
        searchResults(
          query: $query
          queryParams: $queryParams
          locale: $locale
          country: $country
          currency: $currency
          previewTypeIds: $previewTypeIds
          experience: $experience
        ) {
          ...Results
          ...Metadata
          ...Filters
          ...Pagination
          ...ArtistCollections
          __typename
        }
      }
      
      fragment Results on SearchResults {
        results {
          inventoryItem(
            locale: $locale
            country: $country
            currency: $currency
            previewTypeIds: $previewTypeIds
          ) {
            id
            marketingProductTypeId
            description
            productTypeId
            productPageUrl
            blankItemId
            prominentMessage
            price {
              id
              amount
              currency
              discount {
                amount
                percent
                __typename
              }
              __typename
            }
            previewSet {
              id
              previews {
                previewTypeId
                url
                __typename
              }
              __typename
            }
            gaCode
            gaCategory
            attributes {
              name
              value
              attributes {
                name
                value
                __typename
              }
              __typename
            }
            volumeDiscount {
              id
              thresholds {
                percentOff
                quantity
                __typename
              }
              __typename
            }
            experiencesProductCard {
              name
              value
              __typename
            }
            __typename
          }
          work(locale: $locale) {
            id
            title
            artistName
            artistUserName
            isMatureContent
            tags
            __typename
          }
          defaultPreviewTypeId
          groupId
          rank
          artistIsEstablished
          __typename
        }
        __typename
      }
      
      fragment Metadata on SearchResults {
        metadata {
          title
          searchContext {
            category
            __typename
          }
          resultCount
          topic
          searchBar {
            iaCode
            pillLabel
            keywords
            __typename
          }
          __typename
        }
        __typename
      }
      
      fragment Filters on SearchResults {
        filters {
          resetUrl
          staticFilters {
            type
            label
            options {
              name
              label
              applied
              url
              options {
                name
                label
                applied
                url
                __typename
              }
              __typename
            }
            __typename
          }
          filters {
            type
            label
            experiences {
              name
              value
              __typename
            }
            options {
              name
              label
              applied
              disabled
              url
              hexColor
              imageUrl
              __typename
            }
            __typename
          }
          appliedCount
          appliedPath
          resets {
            label
            url
            __typename
          }
          __typename
        }
        __typename
      }
      
      fragment Pagination on SearchResults {
        pagination {
          currentPage
          perPage
          showPreviousPageLink
          showNextPageLink
          paginationLinks {
            namedLinks {
              previousPage {
                rel
                url
                __typename
              }
              nextPage {
                rel
                url
                __typename
              }
              __typename
            }
            __typename
          }
          fromNumber
          toNumber
          total
          __typename
        }
        __typename
      }
      
      fragment ArtistCollections on SearchResults {
        artistCollections {
          applied
          options {
            id
            name
            label
            description
            url
            imageUrl
            applied
            __typename
          }
          reset {
            label
            description
            url
            __typename
          }
          type
          label
          __typename
        }
        __typename
      }
      `,
      variables: { query: "*", queryParams: { queryParamItems: [{ name: "anchor", values: "profile" }, { name: "asc", values: "u" }, { name: "sortOrder", values: "recent" }], pageSize: 100, artistUserName: "chaparty" }, locale: "en", country: "GB", currency: "GBP", previewTypeIds:["product_close","alternate_product_close","artwork"], experience: "artists-own-shop" }
    };



    var response = await fetch("https://www.redbubble.com/boom/graphql", {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,en-GB;q=0.8,de;q=0.7",
        "content-type": "application/json",
      },
      "body": JSON.stringify(requestBody),
      "method": "POST",
      next: { revalidate: 1 }
    });


    var gatheredResponses: Root = await response.json();
    console.log(gatheredResponses);
    return gatheredResponses;

  }

}
