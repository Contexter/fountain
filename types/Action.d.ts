/**
 * Action
 * A Action
 */
declare interface Action {
    actionId?: number;
    characterId?: number | null;
    modernizedText?: string | null;
    originalText?: string | null;
    sceneId?: number | null;
}
export { Action };
