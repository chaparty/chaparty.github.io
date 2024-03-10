import UrlCleaner from "./UrlCleaner";

const urlCleaner = new UrlCleaner();

export default class ProductLinkGenerator {

    CreateProductLink(brand: string, name: string) {
        return `/${urlCleaner.Clean(brand)}/${urlCleaner.Clean(name)}`;
    }
}