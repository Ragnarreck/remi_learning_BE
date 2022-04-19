export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  bigRedButton?: Maybe<Scalars['String']>;
  createOneTask: Task;
  deleteById?: Maybe<Task>;
  deleteOneTask?: Maybe<Task>;
  updateById?: Maybe<Task>;
  updateOneTask?: Maybe<Task>;
};


export type MutationCreateOneTaskArgs = {
  data: TaskCreateInput;
};


export type MutationDeleteByIdArgs = {
  id: Scalars['String'];
};


export type MutationDeleteOneTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type MutationUpdateByIdArgs = {
  finished: Scalars['Boolean'];
  id: Scalars['String'];
};


export type MutationUpdateOneTaskArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};

export type Query = {
  __typename?: 'Query';
  getTask?: Maybe<Task>;
  getTasks?: Maybe<Array<Maybe<Task>>>;
};


export type QueryGetTaskArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Task = {
  __typename?: 'Task';
  content?: Maybe<Scalars['String']>;
  finished?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TaskCreateInput = {
  content: Scalars['String'];
  finished?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type TaskUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  finished?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TaskWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};
