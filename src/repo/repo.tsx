
import { Root } from "@/models/types";

export default class Repository {

  async GetAllItems() {
   var response = await fetch("https://www.redbubble.com/boom/graphql", {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,en-GB;q=0.8,de;q=0.7",
        "content-type": "application/json",
      },
      "body": "{\"operationName\":\"withSearchResults\",\"variables\":{\"query\":\"*\",\"queryParams\":{\"queryParamItems\":[{\"name\":\"anchor\",\"values\":\"profile\"},{\"name\":\"asc\",\"values\":\"u\"},{\"name\":\"sortOrder\",\"values\":\"recent\"}],\"pageSize\":100,\"artistUserName\":\"chaparty\"},\"locale\":\"en\",\"country\":\"GB\",\"currency\":\"GBP\",\"previewTypeIds\":[\"product_close\",\"alternate_product_close\",\"artwork\"],\"experience\":\"artists-own-shop\"},\"query\":\"query withSearchResults($query: String!, $queryParams: QueryParams, $locale: String!, $country: String!, $currency: String!, $previewTypeIds: [String!], $experience: String) {\\n  searchResults(query: $query, queryParams: $queryParams, locale: $locale, country: $country, currency: $currency, previewTypeIds: $previewTypeIds, experience: $experience) {\\n    ...Results\\n    ...Metadata\\n    ...Filters\\n    ...Pagination\\n    ...ArtistCollections\\n    __typename\\n  }\\n}\\n\\nfragment Results on SearchResults {\\n  results {\\n    inventoryItem(locale: $locale, country: $country, currency: $currency, previewTypeIds: $previewTypeIds) {\\n      id\\n      marketingProductTypeId\\n      description\\n      productTypeId\\n      productPageUrl\\n      blankItemId\\n      prominentMessage\\n      price {\\n        id\\n        amount\\n        currency\\n        discount {\\n          amount\\n          percent\\n          __typename\\n        }\\n        __typename\\n      }\\n      previewSet {\\n        id\\n        previews {\\n          previewTypeId\\n          url\\n          __typename\\n        }\\n        __typename\\n      }\\n      gaCode\\n      gaCategory\\n      attributes {\\n        name\\n        value\\n        attributes {\\n          name\\n          value\\n          __typename\\n        }\\n        __typename\\n      }\\n      volumeDiscount {\\n        id\\n        thresholds {\\n          percentOff\\n          quantity\\n          __typename\\n        }\\n        __typename\\n      }\\n      experiencesProductCard {\\n        name\\n        value\\n        __typename\\n      }\\n      __typename\\n    }\\n    work(locale: $locale) {\\n      id\\n      title\\n      artistName\\n      artistUserName\\n      isMatureContent\\n      tags\\n      __typename\\n    }\\n    defaultPreviewTypeId\\n    groupId\\n    rank\\n    artistIsEstablished\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment Metadata on SearchResults {\\n  metadata {\\n    title\\n    searchContext {\\n      category\\n      __typename\\n    }\\n    resultCount\\n    topic\\n    searchBar {\\n      iaCode\\n      pillLabel\\n      keywords\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment Filters on SearchResults {\\n  filters {\\n    resetUrl\\n    staticFilters {\\n      type\\n      label\\n      options {\\n        name\\n        label\\n        applied\\n        url\\n        options {\\n          name\\n          label\\n          applied\\n          url\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    filters {\\n      type\\n      label\\n      experiences {\\n        name\\n        value\\n        __typename\\n      }\\n      options {\\n        name\\n        label\\n        applied\\n        disabled\\n        url\\n        hexColor\\n        imageUrl\\n        __typename\\n      }\\n      __typename\\n    }\\n    appliedCount\\n    appliedPath\\n    resets {\\n      label\\n      url\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment Pagination on SearchResults {\\n  pagination {\\n    currentPage\\n    perPage\\n    showPreviousPageLink\\n    showNextPageLink\\n    paginationLinks {\\n      namedLinks {\\n        previousPage {\\n          rel\\n          url\\n          __typename\\n        }\\n        nextPage {\\n          rel\\n          url\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    fromNumber\\n    toNumber\\n    total\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ArtistCollections on SearchResults {\\n  artistCollections {\\n    applied\\n    options {\\n      id\\n      name\\n      label\\n      description\\n      url\\n      imageUrl\\n      applied\\n      __typename\\n    }\\n    reset {\\n      label\\n      description\\n      url\\n      __typename\\n    }\\n    type\\n    label\\n    __typename\\n  }\\n  __typename\\n}\\n\"}",
      "method": "POST",

    });


    var gatheredResponses : Root = await response.json();
    return gatheredResponses;
    
  }
  
}
