import PredictiveTextClientInterface from "./CalculatePredictiveTextClientInterface";
import HTTPClientInterface from "../../../HTTP/Client/HTTPClientInterface";
import FakeEndpointInterface from "../../../../Infrastructure/FakeAPI/Common/FakeEndpointInterface";

export default class CalculatePredictiveTextClient implements PredictiveTextClientInterface {
  private clientHTTP: HTTPClientInterface;
  private fakeEndpoint: FakeEndpointInterface;

  constructor(
    clientHTTP: HTTPClientInterface,
    fakeEndpoint: FakeEndpointInterface
  ) {
    this.clientHTTP = clientHTTP;
    this.fakeEndpoint = fakeEndpoint;
  }

  handle(data: string): Promise<any> {
    const fakeAPIResponse = this.clientHTTP.handle(this.fakeEndpoint, data);

    return new Promise((resolve, reject) => {
      resolve(fakeAPIResponse)
    });
  }
}