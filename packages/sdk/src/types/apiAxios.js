/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import axios from "axios";
export var ContentType;
(function (ContentType) {
  ContentType["Json"] = "application/json";
  ContentType["FormData"] = "multipart/form-data";
  ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
  instance;
  securityData = null;
  securityWorker;
  secure;
  format;
  constructor({ securityWorker, secure, format, ...axiosConfig } = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }
  setSecurityData = (data) => {
    this.securityData = data;
  };
  mergeRequestParams(params1, params2) {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }
  createFormData(input) {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }
  request = async ({ secure, path, type, query, format, body, ...params }) => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;
    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};
      body = this.createFormData(body);
    }
    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}
/**
 * @title GameFI Core API
 * @version 0.0.1
 * @contact
 *
 * App API description
 */
export class Api extends HttpClient {
  apiInfo = {
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerAssetsByBox
     * @summary Get dropdown items by box
     * @request GET:/api-info/assets/box/{tokenId}/info
     */
    apiInfoControllerAssetsByBox: (tokenId, params = {}) =>
      this.request({
        path: `/api-info/assets/box/${tokenId}/info`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerGetBoxInfoByTxHash
     * @summary Get items by txHash
     * @request GET:/api-info/assets/box/{txHash}/result
     */
    apiInfoControllerGetBoxInfoByTxHash: (txHash, params = {}) =>
      this.request({
        path: `/api-info/assets/box/${txHash}/result`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerInfoToken
     * @summary Get info about token
     * @request GET:/api-info/assets/token/{collection}/{tokenId}
     */
    apiInfoControllerInfoToken: (collection, tokenId, params = {}) =>
      this.request({
        path: `/api-info/assets/token/${collection}/${tokenId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerAssetInfo
     * @summary Get asset info
     * @request GET:/api-info/assets/info
     */
    apiInfoControllerAssetInfo: (params = {}) =>
      this.request({
        path: `/api-info/assets/info`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerAssets
     * @summary Get assets by address
     * @request GET:/api-info/assets/{address}
     */
    apiInfoControllerAssets: (address, query, params = {}) =>
      this.request({
        path: `/api-info/assets/${address}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerSettings
     * @summary Get info by system
     * @request GET:/api-info/settings
     */
    apiInfoControllerSettings: (params = {}) =>
      this.request({
        path: `/api-info/settings`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerGetImplementationTypes
     * @summary Get SC implementation types for different networks
     * @request GET:/api-info/sc-implementation-types
     */
    apiInfoControllerGetImplementationTypes: (query, params = {}) =>
      this.request({
        path: `/api-info/sc-implementation-types`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerHistoryPrice
     * @summary Get price history by token
     * @request GET:/api-info/history/{address}/{tokenId}/price
     */
    apiInfoControllerHistoryPrice: (address, tokenId, params = {}) =>
      this.request({
        path: `/api-info/history/${address}/${tokenId}/price`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerCabinetFilter
     * @summary Get categories for cabinet
     * @request GET:/api-info/filter/cabinet
     */
    apiInfoControllerCabinetFilter: (params = {}) =>
      this.request({
        path: `/api-info/filter/cabinet`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  apiAuth = {
    /**
     * No description
     *
     * @tags Auth
     * @name ApiAuthControllerGetPhrase
     * @summary Request a phrase
     * @request POST:/api-auth/phrase
     */
    apiAuthControllerGetPhrase: (data, params = {}) =>
      this.request({
        path: `/api-auth/phrase`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Auth
     * @name ApiAuthControllerCheckPhrase
     * @summary Check phrase
     * @request POST:/api-auth/phrase/check
     */
    apiAuthControllerCheckPhrase: (data, params = {}) =>
      this.request({
        path: `/api-auth/phrase/check`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  apiMarketplace = {
    /**
     * No description
     *
     * @tags Nft Marketplace
     * @name ApiMarketplaceControllerGetCategories
     * @summary Get nft marketplace global categories
     * @request GET:/api-marketplace/categories
     */
    apiMarketplaceControllerGetCategories: (params = {}) =>
      this.request({
        path: `/api-marketplace/categories`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Nft Marketplace
     * @name ApiMarketplaceControllerFilterByCategory
     * @summary Get nft marketplace filter by category
     * @request GET:/api-marketplace/filter/{address}
     */
    apiMarketplaceControllerFilterByCategory: (address, params = {}) =>
      this.request({
        path: `/api-marketplace/filter/${address}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Nft Marketplace
     * @name ApiMarketplaceControllerOrders
     * @summary Get orders by filter
     * @request POST:/api-marketplace/orders
     */
    apiMarketplaceControllerOrders: (data, params = {}) =>
      this.request({
        path: `/api-marketplace/orders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Nft Marketplace
     * @name ApiMarketplaceControllerGetOrder
     * @summary Get order by id
     * @request GET:/api-marketplace/order/{id}
     */
    apiMarketplaceControllerGetOrder: (id, params = {}) =>
      this.request({
        path: `/api-marketplace/order/${id}`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Nft Marketplace
     * @name ApiMarketplaceControllerGetOrdersByAddress
     * @summary Get orders by wallet
     * @request GET:/api-marketplace/info/{address}/orders
     */
    apiMarketplaceControllerGetOrdersByAddress: (address, query, params = {}) =>
      this.request({
        path: `/api-marketplace/info/${address}/orders`,
        method: "GET",
        query: query,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Nft Marketplace
     * @name ApiMarketplaceControllerGetLatestOrders
     * @summary Get the latest placed orders
     * @request GET:/api-marketplace/orders/latest
     */
    apiMarketplaceControllerGetLatestOrders: (query, params = {}) =>
      this.request({
        path: `/api-marketplace/orders/latest`,
        method: "GET",
        query: query,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Nft Marketplace
     * @name ApiMarketplaceControllerGetImplementTokens
     * @summary Get tokens for which you can sell NFT
     * @request GET:/api-marketplace/info/tokens
     */
    apiMarketplaceControllerGetImplementTokens: (params = {}) =>
      this.request({
        path: `/api-marketplace/info/tokens`,
        method: "GET",
        ...params,
      }),
  };
  apiAdmin = {
    /**
     * No description
     *
     * @tags Admin
     * @name AssetsControllerGetDetails
     * @summary Get asset details
     * @request GET:/api-admin/assets/collections
     */
    assetsControllerGetDetails: (query, params = {}) =>
      this.request({
        path: `/api-admin/assets/collections`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AssetsControllerGetCollection
     * @summary Get collection
     * @request GET:/api-admin/assets/collection/{address}/base
     */
    assetsControllerGetCollection: (address, query, params = {}) =>
      this.request({
        path: `/api-admin/assets/collection/${address}/base`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AssetsControllerGetCollectionEntity
     * @summary Get collection entity
     * @request GET:/api-admin/assets/collection/{address}/entities/{tokenId}
     */
    assetsControllerGetCollectionEntity: (address, tokenId, params = {}) =>
      this.request({
        path: `/api-admin/assets/collection/${address}/entities/${tokenId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AssetsControllerGetItems
     * @summary Get items
     * @request GET:/api-admin/assets/items/{address}/{tokenId}
     */
    assetsControllerGetItems: (address, tokenId, query, params = {}) =>
      this.request({
        path: `/api-admin/assets/items/${address}/${tokenId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AssetsControllerGetItem
     * @summary Get item
     * @request POST:/api-admin/assets/items/{wallet}
     */
    assetsControllerGetItem: (wallet, data, params = {}) =>
      this.request({
        path: `/api-admin/assets/items/${wallet}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AssetsControllerGetProperties
     * @summary Get entity properties
     * @request GET:/api-admin/assets/entities/{address}/{tokenId}/properties
     */
    assetsControllerGetProperties: (address, tokenId, params = {}) =>
      this.request({
        path: `/api-admin/assets/entities/${address}/${tokenId}/properties`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name LootboxesControllerGetLootboxDetails
     * @summary Get lootbox details
     * @request GET:/api-admin/lootboxes
     */
    lootboxesControllerGetLootboxDetails: (query, params = {}) =>
      this.request({
        path: `/api-admin/lootboxes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name LootboxesControllerGetBoxEntity
     * @summary Get box entity
     * @request GET:/api-admin/lootboxes/{tokenId}
     */
    lootboxesControllerGetBoxEntity: (tokenId, params = {}) =>
      this.request({
        path: `/api-admin/lootboxes/${tokenId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name LootboxesControllerGetProperties
     * @summary Get properties and dropdown items
     * @request GET:/api-admin/lootboxes/{tokenId}/properties
     */
    lootboxesControllerGetProperties: (tokenId, params = {}) =>
      this.request({
        path: `/api-admin/lootboxes/${tokenId}/properties`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name LootboxesControllerGetItems
     * @summary Get boxes
     * @request GET:/api-admin/lootboxes/{tokenId}/items
     */
    lootboxesControllerGetItems: (tokenId, query, params = {}) =>
      this.request({
        path: `/api-admin/lootboxes/${tokenId}/items`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name LootboxesControllerGetOpenedBoxes
     * @summary Get opened boxes
     * @request GET:/api-admin/lootboxes/{tokenId}/opened
     */
    lootboxesControllerGetOpenedBoxes: (tokenId, query, params = {}) =>
      this.request({
        path: `/api-admin/lootboxes/${tokenId}/opened`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ProfilesControllerGetProfiles
     * @summary Get profiles
     * @request GET:/api-admin/profiles
     */
    profilesControllerGetProfiles: (query, params = {}) =>
      this.request({
        path: `/api-admin/profiles`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ProfilesControllerGetProfileById
     * @summary Get profile
     * @request GET:/api-admin/profiles/{id}
     */
    profilesControllerGetProfileById: (id, params = {}) =>
      this.request({
        path: `/api-admin/profiles/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ProfilesControllerGetErc20
     * @summary Get ERC20 assets
     * @request GET:/api-admin/profiles/{id}/assets/erc20
     */
    profilesControllerGetErc20: (id, query, params = {}) =>
      this.request({
        path: `/api-admin/profiles/${id}/assets/erc20`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ProfilesControllerGetAvatars
     * @summary Get avatar assets
     * @request GET:/api-admin/profiles/{id}/assets/avatars
     */
    profilesControllerGetAvatars: (id, query, params = {}) =>
      this.request({
        path: `/api-admin/profiles/${id}/assets/avatars`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ProfilesControllerGetItems
     * @summary Get ERC1155 assets
     * @request GET:/api-admin/profiles/{id}/assets/items
     */
    profilesControllerGetItems: (id, query, params = {}) =>
      this.request({
        path: `/api-admin/profiles/${id}/assets/items`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ProfilesControllerGetLogs
     * @summary Get logs
     * @request GET:/api-admin/profiles/{id}/logs
     */
    profilesControllerGetLogs: (id, query, params = {}) =>
      this.request({
        path: `/api-admin/profiles/${id}/logs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ProfilesControllerGetOwnerHistory
     * @summary Get owner history
     * @request GET:/api-admin/profiles/{id}/history
     */
    profilesControllerGetOwnerHistory: (id, query, params = {}) =>
      this.request({
        path: `/api-admin/profiles/${id}/history`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetPerformanceToday
     * @summary Get performance today
     * @request GET:/api-admin/marketplace/performance-today
     */
    marketplaceControllerGetPerformanceToday: (params = {}) =>
      this.request({
        path: `/api-admin/marketplace/performance-today`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetSalesToday
     * @summary Get sales today
     * @request GET:/api-admin/marketplace/sales-today
     */
    marketplaceControllerGetSalesToday: (params = {}) =>
      this.request({
        path: `/api-admin/marketplace/sales-today`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetListOfSales
     * @summary Get list of sales
     * @request GET:/api-admin/marketplace/list-of-sales
     */
    marketplaceControllerGetListOfSales: (query, params = {}) =>
      this.request({
        path: `/api-admin/marketplace/list-of-sales`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetTopSellers
     * @summary Get top sellers
     * @request GET:/api-admin/marketplace/top-sellers
     */
    marketplaceControllerGetTopSellers: (query, params = {}) =>
      this.request({
        path: `/api-admin/marketplace/top-sellers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetProfitTrend
     * @summary Get profit trend
     * @request GET:/api-admin/marketplace/trend/profit
     */
    marketplaceControllerGetProfitTrend: (query, params = {}) =>
      this.request({
        path: `/api-admin/marketplace/trend/profit`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetTurnoverTrend
     * @summary Get turnover trend
     * @request GET:/api-admin/marketplace/trend/turnover
     */
    marketplaceControllerGetTurnoverTrend: (query, params = {}) =>
      this.request({
        path: `/api-admin/marketplace/trend/turnover`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetBookkeepingInfo
     * @summary Get bookkeeping
     * @request GET:/api-admin/marketplace/bookkeeping/info
     */
    marketplaceControllerGetBookkeepingInfo: (params = {}) =>
      this.request({
        path: `/api-admin/marketplace/bookkeeping/info`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetBookkeepingAssets
     * @summary Get bookkeeping assets
     * @request GET:/api-admin/marketplace/bookkeeping/assets
     */
    marketplaceControllerGetBookkeepingAssets: (query, params = {}) =>
      this.request({
        path: `/api-admin/marketplace/bookkeeping/assets`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetCategories
     * @summary Get categories
     * @request GET:/api-admin/marketplace/categories
     */
    marketplaceControllerGetCategories: (query, params = {}) =>
      this.request({
        path: `/api-admin/marketplace/categories`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetPercentage
     * @summary Get percentage
     * @request GET:/api-admin/marketplace/percentage
     */
    marketplaceControllerGetPercentage: (params = {}) =>
      this.request({
        path: `/api-admin/marketplace/percentage`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetAssets
     * @summary Get assets
     * @request GET:/api-admin/marketplace/assets
     */
    marketplaceControllerGetAssets: (query, params = {}) =>
      this.request({
        path: `/api-admin/marketplace/assets`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetAsset
     * @summary Get token
     * @request GET:/api-admin/marketplace/assets/{address}
     */
    marketplaceControllerGetAsset: (address, params = {}) =>
      this.request({
        path: `/api-admin/marketplace/assets/${address}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetTransactions
     * @summary Get history of transactions
     * @request GET:/api-admin/marketplace/history/transactions
     */
    marketplaceControllerGetTransactions: (query, params = {}) =>
      this.request({
        path: `/api-admin/marketplace/history/transactions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetHistoryOfPercentage
     * @summary Get history of percentage
     * @request GET:/api-admin/marketplace/history/percentage
     */
    marketplaceControllerGetHistoryOfPercentage: (query, params = {}) =>
      this.request({
        path: `/api-admin/marketplace/history/percentage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AvatarsControllerGetAvatars
     * @summary Get avatars
     * @request GET:/api-admin/avatars
     */
    avatarsControllerGetAvatars: (query, params = {}) =>
      this.request({
        path: `/api-admin/avatars`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AvatarsControllerGetAvatarEntity
     * @summary Get avatar entity
     * @request GET:/api-admin/avatars/{tokenId}
     */
    avatarsControllerGetAvatarEntity: (tokenId, params = {}) =>
      this.request({
        path: `/api-admin/avatars/${tokenId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AvatarsControllerGetProperties
     * @summary Get entity properties
     * @request GET:/api-admin/avatars/{tokenId}/properties
     */
    avatarsControllerGetProperties: (tokenId, params = {}) =>
      this.request({
        path: `/api-admin/avatars/${tokenId}/properties`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name AvatarsControllerGetItems
     * @summary Get items
     * @request GET:/api-admin/avatars/{tokenId}/items
     */
    avatarsControllerGetItems: (tokenId, query, params = {}) =>
      this.request({
        path: `/api-admin/avatars/${tokenId}/items`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetPerformanceToday
     * @summary Get performance today
     * @request GET:/api-admin/shops/performance-today
     */
    shopsControllerGetPerformanceToday: (params = {}) =>
      this.request({
        path: `/api-admin/shops/performance-today`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetSalesToday
     * @summary Get sales today
     * @request GET:/api-admin/shops/sales-today
     */
    shopsControllerGetSalesToday: (params = {}) =>
      this.request({
        path: `/api-admin/shops/sales-today`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetListOfSales
     * @summary Get list of sales
     * @request GET:/api-admin/shops/list-of-sales
     */
    shopsControllerGetListOfSales: (query, params = {}) =>
      this.request({
        path: `/api-admin/shops/list-of-sales`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetRevenueTrend
     * @summary Get revenue trend
     * @request GET:/api-admin/shops/trend/revenue
     */
    shopsControllerGetRevenueTrend: (query, params = {}) =>
      this.request({
        path: `/api-admin/shops/trend/revenue`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetBookkeepingInfo
     * @summary Get bookkeeping
     * @request GET:/api-admin/shops/bookkeeping/info
     */
    shopsControllerGetBookkeepingInfo: (params = {}) =>
      this.request({
        path: `/api-admin/shops/bookkeeping/info`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetAssetsOnSc
     * @summary Get bookkeeping assets
     * @request GET:/api-admin/shops/bookkeeping/assets
     */
    shopsControllerGetAssetsOnSc: (query, params = {}) =>
      this.request({
        path: `/api-admin/shops/bookkeeping/assets`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetTransactions
     * @summary Get history of transactions
     * @request GET:/api-admin/shops/history/transactions
     */
    shopsControllerGetTransactions: (query, params = {}) =>
      this.request({
        path: `/api-admin/shops/history/transactions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetShops
     * @summary Get shops
     * @request GET:/api-admin/shops
     */
    shopsControllerGetShops: (params = {}) =>
      this.request({
        path: `/api-admin/shops`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetShop
     * @summary Get shop
     * @request GET:/api-admin/shops/{id}
     */
    shopsControllerGetShop: (id, params = {}) =>
      this.request({
        path: `/api-admin/shops/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  apiShops = {
    /**
     * No description
     *
     * @tags Shops
     * @name ApiShopsControllerGetAllShops
     * @summary Get all shops
     * @request GET:/api-shops
     */
    apiShopsControllerGetAllShops: (query, params = {}) =>
      this.request({
        path: `/api-shops`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Shops
     * @name ApiShopsControllerGetAvailableTags
     * @summary Get available tags
     * @request GET:/api-shops/tags
     */
    apiShopsControllerGetAvailableTags: (params = {}) =>
      this.request({
        path: `/api-shops/tags`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
