/**
 * @name FavoriteExperiment
 * @author ikeman2003
 * @website
 * @source
 * @version 1.0
 * @description Make it so you are able to enable the FavoriteChannel Experiment
 * @updateUrl
 */

 module.exports = class SoftBlock {

    start() {
        
        webpackChunkdiscord_app.push([
            [Symbol()],
            {},
            ({c: cache}) => {
                for (const id in cache) {
                    const exports = cache[id]?.exports;
                    if (exports && typeof exports.overrideBucket === "function" && exports.ExperimentStore) {
                        exports.overrideBucket("2021-09_favorites_server", 1);
                        // Needs it two times because discord.
                        setTimeout(() => {
                            exports.overrideBucket("2021-09_favorites_server", 1);
                        }, 100);
                        console.log("Favorites Enabled.");
                    }
                }
            }
            ]);
        }

    stop() {}
};