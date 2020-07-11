type headres = {
  "Content-Type": string;
  "x-api-key"?: string;
};
class ApiService {
  // define default method and headers here
  private _method: string = "GET";
  private _headers: headres = { "Content-Type": "application/json" };

  constructor(private _authToken?: string) {}

  get authToken() {
    return this._authToken;
  }
  get method() {
    return this._method;
  }
  set method(_newMethod) {
    this._method = _newMethod;
  }
  get headers() {
    return this._headers;
  }
  set headers(_newHeaders) {
    this._headers = _newHeaders;
  }

  getRequest(reBody?: any) {
    return {
      method: this._method,
      headers: this._headers,
      body: this._method === "POST" ? JSON.stringify(reBody) : null,
    };
  }
}
export default ApiService;
