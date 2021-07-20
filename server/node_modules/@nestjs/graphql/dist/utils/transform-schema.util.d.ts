import { GraphQLReferenceResolver } from '@apollo/federation/dist/types';
import { GraphQLNamedType, GraphQLSchema } from 'graphql';
declare module 'graphql/type/definition' {
    interface GraphQLObjectType {
        resolveReference?: GraphQLReferenceResolver<any>;
    }
    interface GraphQLObjectTypeConfig<TSource, TContext> {
        resolveReference?: GraphQLReferenceResolver<TContext>;
    }
}
declare type TypeTransformer = (type: GraphQLNamedType) => GraphQLNamedType | null | undefined;
export declare function transformSchema(schema: GraphQLSchema, transformType: TypeTransformer): GraphQLSchema;
export {};
