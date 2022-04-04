/**
 * @name FavoriteExperiment
 * @author ikeman2003
 * @website https://github.com/ikeman2003/BetterDiscordEnhancements
 * @source https://github.com/ikeman2003/BetterDiscordEnhancements/blob/main/plugins/FavoriteExperiment.plugin.js
 * @version 1.1
 * @description Make it so you are able to enable the FavoriteChannel Experiment
 * @updateUrl https://raw.githubusercontent.com/ikeman2003/BetterDiscordEnhancements/main/plugins/FavoriteExperiment.plugin.js
 */

 module.exports = class FavoriteExperiment {

    start() {
		Object.defineProperty(BdApi.findModuleByProps(["isDeveloper"]),"isDeveloper",{get:_=>1,set:_=>_,configurable:true});
        
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
    stop() {
        BdApi.findModuleByProps(["isDeveloper"]) && Object.defineProperty(BdApi.findModuleByProps(["isDeveloper"]),"isDeveloper",{
			get:_=>0,
			set:_=>{
				throw new Error("Username is not in the sudoers file. This incident will be reported");
			},
			configurable: true
        });
    }
};