//=============================================================================
// NonCombatMenu_ItemOnly.js
//=============================================================================

/*:
 * @plugindesc Addon to the Non-Combat Menu to jump directly to the item screen
 * @author mjshi
 *
 * @help 
 * ----------------------------------------------------------------------------
 *   Non-Combat Menu Item Only Addon by mjshi
 *   Free for both commercial and non-commercial use, with credit.
 * ----------------------------------------------------------------------------
 *
 * > Is something broken? Go to http://mjshi.weebly.com/contact.html and I'll
 *   try my best to help you!
 *  
 */

if (Imported.NonCombatMenu) {
	Scene_Map.prototype.callMenu = function() {
	    SoundManager.playOk();
	    SceneManager.push(Scene_Item);
	    $gameTemp.clearDestination();
	    this._mapNameWindow.hide();
	    this._waitCount = 2;
	}
}
