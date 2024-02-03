import { Act } from './Act'
import { Action } from './Action'
import { Casting } from './Casting'
import { CenteredText } from './CenteredText'
import { Character } from './Character'
import { CharacterRelationship } from './CharacterRelationship'
import { CrossReference } from './CrossReference'
import { Dialogue } from './Dialogue'
import { ExtendedNotesResearch } from './ExtendedNotesResearch'
import { FormattingRule } from './FormattingRule'
import { Metadatum } from './Metadatum'
import { MusicSound } from './MusicSound'
import { Note } from './Note'
import { PageBreak } from './PageBreak'
import { Parenthetical } from './Parenthetical'
import { Playwright } from './Playwright'
import { Prop } from './Prop'
import { RevisionHistory } from './RevisionHistory'
import { Scene } from './Scene'
import { SceneLocation } from './SceneLocation'
import { Script } from './Script'
import { SectionHeading } from './SectionHeading'
import { TitlePage } from './TitlePage'
import { Transition } from './Transition'
  
interface EntityTypes  {
  Act: Act
    Action: Action
    Casting: Casting
    CenteredText: CenteredText
    Character: Character
    CharacterRelationship: CharacterRelationship
    CrossReference: CrossReference
    Dialogue: Dialogue
    ExtendedNotesResearch: ExtendedNotesResearch
    FormattingRule: FormattingRule
    Metadatum: Metadatum
    MusicSound: MusicSound
    Note: Note
    PageBreak: PageBreak
    Parenthetical: Parenthetical
    Playwright: Playwright
    Prop: Prop
    RevisionHistory: RevisionHistory
    Scene: Scene
    SceneLocation: SceneLocation
    Script: Script
    SectionHeading: SectionHeading
    TitlePage: TitlePage
    Transition: Transition
}
  
export { EntityTypes, Act, Action, Casting, CenteredText, Character, CharacterRelationship, CrossReference, Dialogue, ExtendedNotesResearch, FormattingRule, Metadatum, MusicSound, Note, PageBreak, Parenthetical, Playwright, Prop, RevisionHistory, Scene, SceneLocation, Script, SectionHeading, TitlePage, Transition }