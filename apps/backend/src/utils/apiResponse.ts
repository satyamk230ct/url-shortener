// Use of Generic in typescript
// A consistent API makes frontend integration much easier.
export class ApiResponse<T> {
    constructor(public sucess: boolean,public message: string,
                    public data? : T) {  }
}