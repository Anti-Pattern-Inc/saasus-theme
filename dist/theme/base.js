import { DarkSpacesTheme } from './schemes/DarkSpacesTheme';
import { GreenFieldsTheme } from './schemes/GreenFieldsTheme';
import { GreyGooseTheme } from './schemes/GreyGooseTheme';
import { NebulaFighterTheme } from './schemes/NebulaFighterTheme';
import { PureLightTheme } from './schemes/PureLightTheme';
import { PurpleFlowTheme } from './schemes/PurpleFlowTheme';
import { SaaSusTheme } from './schemes/SaaSusTheme';
export function themeCreator(theme) {
    return themeMap[theme];
}
const themeMap = {
    SaaSusTheme,
    PureLightTheme,
    GreyGooseTheme,
    PurpleFlowTheme,
    NebulaFighterTheme,
    DarkSpacesTheme,
    GreenFieldsTheme,
};
//# sourceMappingURL=base.js.map