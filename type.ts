import { Product } from "use-shopping-cart/core";

// Define types for the API response
export type Address = {
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  cityLocality: string;
  stateProvince: string;
  postalCode: string;
  countryCode: string;
  addressResidentialIndicator: "yes" | "no";
};
export type unit = "ounce" | "gram" | "kilogram" | "pound";
export type dimensionUnit = "inch" | "centimeter";

export type Package = {
  weight: {
    value: number;
    unit: unit;
  };
  dimensions: {
    height: number;
    width: number;
    length: number;
    unit: dimensionUnit;
  };
};

export type Rate = {
  rateId: string;
  estimatedDeliveryDate: string;
  shipDate: string;
  shippingAmount: {
    currency: string;
    amount: number;
  };
  carrierFriendlyName: string;
  carrierDeliveryDays: string;
};

export interface trackingObjType {
  trackingNumber: string;
  labelId: string;
  carrierCode: string;
}

export interface TrackingData {
  trackingNumber?: string;
  statusDescription?: string;
  carrierStatusDescription?: string;
  estimatedDeliveryDate?: string;
  actualDeliveryDate?: string;
}

export interface ProductData {
  _id?: string;
  _type: string;
  name: string;
  price: number;
  prevPrice: number;
  rating: number;
  image: string;
  badge: string | null;
  code: string;
  description: string;
  category: string;
  shipment: {
    weight: {
      value: number;
      unit: string;
    };
    dimensions: {
      height: number;
      width: number;
      length: number;
      unit: string;
    };
  };
}
export interface ICustomerAddress {
  email: string;
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  state: string;
  phoneNumber: string;
}

export interface IOrder {
  _type: "order";
  address: ICustomerAddress;
  products: Product[];
  subTotal: number;
  shippingAmount: number;
  total: number;
  trackingId: string;
  rates: Rate[];
  LabelPDF: string;
  carrierName: string;
  userId: string;
  orderDate: string;
  orderStatus: string;
  totalItems: number;
  _id: string;
  paymentMethod: "stripe" | "COD";
}
export interface ISanityOrder {
  products: {
    product: {
      _type: "reference";
      _ref: string;
    }; // Product ID (reference)
    quantity: number;
  }[];
  address: {
    email: string;
    country: string;
    phone: string;
    name: string;
    postalCode: string;
    state: string;
    city: string;
    street: string;
  };
  payment: {
    totalAmount: number;
    method: "stripe" | "COD";
    status: "pending" | "success";
  };
  userId: string;
  shipment: {
    carrierName: string;
    labelPdf: string; // URL of the uploaded file
    trackingId: string;
    shipmentRate: number;
    status: "pending" | "shipped" | "in_transit" | "delivered" | "returned";
  };
}
