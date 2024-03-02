export interface IClient {
  query$(query: string, placeHolder: any, database: string): Promise<any>;
  queryByFile$(query: string, placeHolder: any, database: string): Promise<any>;
  commonQuery$(query: string, placeHolder: any, database: string): Promise<any>;
}