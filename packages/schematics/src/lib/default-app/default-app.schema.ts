export interface DefaultOptions {
    /**
     * web3chief application name.
     */
    name: string | number;
    /**
     * web3chief application author.
     */
    author?: string;
    /**
     * web3chief application description.
     */
    description?: string;
    /**
     * web3chief application destination directory.
     */
    directory?: string;
    /**
     * With TypeScript strict mode.
     */
    strict?: boolean;
    /**
     * web3chief application version.
     */
    version?: string;
    /**
     * Application language.
     */
    language?: string;
    /**
     * The used package manager.
     */
    packageManager?: 'npm' | 'yarn' | 'undefined';
    /**
     * web3chief included production dependencies (comma separated values).
     */
    dependencies?: string;
    /**
     * web3chief included development dependencies (comma separated values).
     */
    devDependencies?: string;
}