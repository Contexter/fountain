import type { PlatformaticApp, PlatformaticDBMixin, PlatformaticDBConfig, Entity, Entities, EntityHooks } from '@platformatic/db'
import { EntityTypes, Act,Action,Casting,CenteredText,Character,CharacterRelationship,CrossReference,Dialogue,ExtendedNotesResearch,FormattingRule,Metadatum,MusicSound,Note,PageBreak,Parenthetical,Playwright,Prop,RevisionHistory,Scene,SceneLocation,Script,SectionHeading,TitlePage,Transition } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Act' | 'Action' | 'Casting' | 'CenteredText' | 'Character' | 'CharacterRelationship' | 'CrossReference' | 'Dialogue' | 'ExtendedNotesResearch' | 'FormattingRule' | 'Metadatum' | 'MusicSound' | 'Note' | 'PageBreak' | 'Parenthetical' | 'Playwright' | 'Prop' | 'RevisionHistory' | 'Scene' | 'SceneLocation' | 'Script' | 'SectionHeading' | 'TitlePage' | 'Transition'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

interface AppEntities extends Entities {
  act: Entity<Act>,
    action: Entity<Action>,
    casting: Entity<Casting>,
    centeredText: Entity<CenteredText>,
    character: Entity<Character>,
    characterRelationship: Entity<CharacterRelationship>,
    crossReference: Entity<CrossReference>,
    dialogue: Entity<Dialogue>,
    extendedNotesResearch: Entity<ExtendedNotesResearch>,
    formattingRule: Entity<FormattingRule>,
    metadatum: Entity<Metadatum>,
    musicSound: Entity<MusicSound>,
    note: Entity<Note>,
    pageBreak: Entity<PageBreak>,
    parenthetical: Entity<Parenthetical>,
    playwright: Entity<Playwright>,
    prop: Entity<Prop>,
    revisionHistory: Entity<RevisionHistory>,
    scene: Entity<Scene>,
    sceneLocation: Entity<SceneLocation>,
    script: Entity<Script>,
    sectionHeading: Entity<SectionHeading>,
    titlePage: Entity<TitlePage>,
    transition: Entity<Transition>,
}

interface AppEntityHooks {
  addEntityHooks(entityName: 'act', hooks: EntityHooks<Act>): any
    addEntityHooks(entityName: 'action', hooks: EntityHooks<Action>): any
    addEntityHooks(entityName: 'casting', hooks: EntityHooks<Casting>): any
    addEntityHooks(entityName: 'centeredText', hooks: EntityHooks<CenteredText>): any
    addEntityHooks(entityName: 'character', hooks: EntityHooks<Character>): any
    addEntityHooks(entityName: 'characterRelationship', hooks: EntityHooks<CharacterRelationship>): any
    addEntityHooks(entityName: 'crossReference', hooks: EntityHooks<CrossReference>): any
    addEntityHooks(entityName: 'dialogue', hooks: EntityHooks<Dialogue>): any
    addEntityHooks(entityName: 'extendedNotesResearch', hooks: EntityHooks<ExtendedNotesResearch>): any
    addEntityHooks(entityName: 'formattingRule', hooks: EntityHooks<FormattingRule>): any
    addEntityHooks(entityName: 'metadatum', hooks: EntityHooks<Metadatum>): any
    addEntityHooks(entityName: 'musicSound', hooks: EntityHooks<MusicSound>): any
    addEntityHooks(entityName: 'note', hooks: EntityHooks<Note>): any
    addEntityHooks(entityName: 'pageBreak', hooks: EntityHooks<PageBreak>): any
    addEntityHooks(entityName: 'parenthetical', hooks: EntityHooks<Parenthetical>): any
    addEntityHooks(entityName: 'playwright', hooks: EntityHooks<Playwright>): any
    addEntityHooks(entityName: 'prop', hooks: EntityHooks<Prop>): any
    addEntityHooks(entityName: 'revisionHistory', hooks: EntityHooks<RevisionHistory>): any
    addEntityHooks(entityName: 'scene', hooks: EntityHooks<Scene>): any
    addEntityHooks(entityName: 'sceneLocation', hooks: EntityHooks<SceneLocation>): any
    addEntityHooks(entityName: 'script', hooks: EntityHooks<Script>): any
    addEntityHooks(entityName: 'sectionHeading', hooks: EntityHooks<SectionHeading>): any
    addEntityHooks(entityName: 'titlePage', hooks: EntityHooks<TitlePage>): any
    addEntityHooks(entityName: 'transition', hooks: EntityHooks<Transition>): any
}

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<PlatformaticDBConfig> &
      PlatformaticDBMixin<AppEntities> &
      AppEntityHooks
  }
}
