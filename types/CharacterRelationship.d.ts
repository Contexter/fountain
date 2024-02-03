/**
 * CharacterRelationship
 * A CharacterRelationship
 */
declare interface CharacterRelationship {
    relationshipId?: number;
    character1Id?: number | null;
    character2Id?: number | null;
    relationshipType?: string | null;
}
export { CharacterRelationship };
