/**
 * @name My Test Plugin
 * @author ZEIN_TRY
 * @description Test
 * @website https://zeintry.zeinfarran7.repl.co
 * @version 0.0.1
 */

module.exports = class ExamplePlugin {
    start() {
      // Called when the plugin is activated (including after reloads)
      BdApi.alert(class{name}, "This is my first plugin!");
    } 

    stop() {
      // Called when the plugin is deactivated
      BdApi.alert(class{name}, 'You Disabled This Plugin')
    }
}