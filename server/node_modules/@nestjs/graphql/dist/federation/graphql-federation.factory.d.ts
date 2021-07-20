import { GraphQLSchemaBuilder } from '../graphql-schema.builder';
import { GqlModuleOptions } from '../interfaces';
import { PluginsExplorerService, ResolversExplorerService, ScalarsExplorerService } from '../services';
import { GraphQLSchemaHost } from '../graphql-schema.host';
export declare class GraphQLFederationFactory {
    private readonly resolversExplorerService;
    private readonly scalarsExplorerService;
    private readonly pluginsExplorerService;
    private readonly gqlSchemaBuilder;
    private readonly gqlSchemaHost;
    constructor(resolversExplorerService: ResolversExplorerService, scalarsExplorerService: ScalarsExplorerService, pluginsExplorerService: PluginsExplorerService, gqlSchemaBuilder: GraphQLSchemaBuilder, gqlSchemaHost: GraphQLSchemaHost);
    mergeOptions(options?: GqlModuleOptions): Promise<GqlModuleOptions>;
    private buildSchemaFromTypeDefs;
    private generateSchema;
    private getResolvers;
    private extendResolvers;
    private overrideOrExtendResolvers;
    private overrideFederatedResolveType;
}
