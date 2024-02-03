/**
 * Dialogue
 * A Dialogue
 */
declare interface Dialogue {
    dialogueId?: number;
    characterId?: number | null;
    modernizedText?: string | null;
    originalText?: string | null;
    sceneId?: number | null;
}
export { Dialogue };
