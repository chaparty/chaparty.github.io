
import { SearchResult, Root } from "@/models/types";
import { readFile } from "fs/promises";

export default class Repository {

  async GetAllItemsJson() {


    var collectiblesData = await readFile(process.cwd() + "/src/data/data.json", "utf-8");

    var gatheredResponses: SearchResult[] = JSON.parse(collectiblesData);
    return gatheredResponses;
  }

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

    return gatheredResponses;

  }

}
