import { IBookListDocumentDto, IBookListMetaDto } from "../dto";

export interface IBookListRes {
  meta: IBookListMetaDto;
  documents: IBookListDocumentDto[];
}
