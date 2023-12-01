import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Book, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly currentUsers?: (string | null)[] | null;
  readonly title: string;
  readonly author: string;
  readonly description: string;
  readonly numberAvailable: number;
  readonly over18: boolean;
  readonly reviews?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Book, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly currentUsers?: (string | null)[] | null;
  readonly title: string;
  readonly author: string;
  readonly description: string;
  readonly numberAvailable: number;
  readonly over18: boolean;
  readonly reviews?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Book = LazyLoading extends LazyLoadingDisabled ? EagerBook : LazyBook

export declare const Book: (new (init: ModelInit<Book>) => Book) & {
  copyOf(source: Book, mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void): Book;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly birthdate: string;
  readonly username: string;
  readonly currentBooks?: (string | null)[] | null;
  readonly fines?: (string | null)[] | null;
  readonly admin: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly birthdate: string;
  readonly username: string;
  readonly currentBooks?: (string | null)[] | null;
  readonly fines?: (string | null)[] | null;
  readonly admin: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}