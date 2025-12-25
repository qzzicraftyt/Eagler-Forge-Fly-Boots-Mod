// ==EaglerForge Mod==
// @name Diamond Boots Flight
// @author Qzzi_craft
// @version 1.0
// @description Grants creative flight when wearing diamond boots
// ==/EaglerForge Mod==

EaglerForge.registerMod(function () {

  let flightEnabled = false;

  EaglerForge.onTick(function () {
    const player = EaglerForge.player;
    if (!player) return;

    // Armor slot 3 = boots
    const boots = player.getArmor(3);

    const wearingDiamondBoots =
      boots && boots.id === "diamond_boots";

    if (wearingDiamondBoots && !flightEnabled) {
      player.setAllowFlying(true);
      player.setFlying(true);
      flightEnabled = true;
    }

    if (!wearingDiamondBoots && flightEnabled) {
      player.setFlying(false);
      player.setAllowFlying(false);
      flightEnabled = false;
    }
  });

});
