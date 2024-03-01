export interface Root {
    data: Data
  }
  
  export interface Data {
    searchResults: SearchResults
  }
  
  export interface SearchResults {
    results: Result[]
    __typename: string
    metadata: Metadata
    filters: Filters
    pagination: Pagination
    artistCollections: ArtistCollections
  }
  
  export interface Result {
    inventoryItem: InventoryItem
    work: Work
    defaultPreviewTypeId: string
    groupId: any
    rank: number
    artistIsEstablished: boolean
    __typename: string
  }
  
  export interface InventoryItem {
    id: string
    marketingProductTypeId: string
    description: string
    productTypeId: string
    productPageUrl: string
    blankItemId: string
    prominentMessage: any
    price: Price
    previewSet: PreviewSet
    gaCode: string
    gaCategory: string
    attributes: Attribute[]
    volumeDiscount?: VolumeDiscount
    experiencesProductCard: ExperiencesProductCard[]
    __typename: string
  }
  
  export interface Price {
    id: string
    amount: number
    currency: string
    discount: Discount
    __typename: string
  }
  
  export interface Discount {
    amount: number
    percent: number
    __typename: string
  }
  
  export interface PreviewSet {
    id: string
    previews: Preview[]
    __typename: string
  }
  
  export interface Preview {
    previewTypeId: string
    url: string
    __typename: string
  }
  
  export interface Attribute {
    name: string
    value: string
    attributes: Attribute2[]
    __typename: string
  }
  
  export interface Attribute2 {
    name: string
    value: any
    __typename: string
  }
  
  export interface VolumeDiscount {
    id: string
    thresholds: Threshold[]
    __typename: string
  }
  
  export interface Threshold {
    percentOff: number
    quantity: number
    __typename: string
  }
  
  export interface ExperiencesProductCard {
    name: string
    value: string
    __typename: string
  }
  
  export interface Work {
    id: string
    title: string
    artistName: string
    artistUserName: string
    isMatureContent: boolean
    tags: string[]
    __typename: string
  }
  
  export interface Metadata {
    title: string
    searchContext: SearchContext
    resultCount: number
    topic: string
    searchBar: SearchBar
    __typename: string
  }
  
  export interface SearchContext {
    category: string
    __typename: string
  }
  
  export interface SearchBar {
    iaCode: string
    pillLabel: any
    keywords: any[]
    __typename: string
  }
  
  export interface Filters {
    resetUrl: string
    staticFilters: StaticFilter[]
    filters: Filter[]
    appliedCount: number
    appliedPath: any[]
    resets: any[]
    __typename: string
  }
  
  export interface StaticFilter {
    type: string
    label: string
    options: Option[]
    __typename: string
  }
  
  export interface Option {
    name: string
    label: string
    applied: boolean
    url: string
    options: Option2[]
    __typename: string
  }
  
  export interface Option2 {
    name: string
    label: string
    applied: boolean
    url: string
    __typename: string
  }
  
  export interface Filter {
    type: string
    label: string
    experiences: Experience[]
    options: Option3[]
    __typename: string
  }
  
  export interface Experience {
    name: string
    value: string
    __typename: string
  }
  
  export interface Option3 {
    name: string
    label: string
    applied: boolean
    disabled: boolean
    url: string
    hexColor: any
    imageUrl: any
    __typename: string
  }
  
  export interface Pagination {
    currentPage: any
    perPage: any
    showPreviousPageLink: any
    showNextPageLink: any
    paginationLinks: any
    fromNumber: any
    toNumber: any
    total: any
    __typename: string
  }
  
  export interface ArtistCollections {
    applied: boolean
    options: Option4[]
    reset: any
    type: string
    label: string
    __typename: string
  }
  
  export interface Option4 {
    id?: number
    name: string
    label: string
    description?: string
    url: string
    imageUrl: string
    applied: boolean
    __typename: string
  }
  