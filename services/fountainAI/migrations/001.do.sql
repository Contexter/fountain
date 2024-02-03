CREATE TABLE Playwright (
    Author_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Biography TEXT,
    Contact_Information TEXT
);

CREATE TABLE Metadata (
    Metadata_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Creation_Date DATE,
    Last_Modified_Date DATE,
    Version_Number INTEGER,
    Additional_Information TEXT
);

CREATE TABLE Script (
    Script_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Title TEXT NOT NULL,
    Author_ID INTEGER,
    URL TEXT,
    Metadata_ID INTEGER,
    FOREIGN KEY (Author_ID) REFERENCES Playwright(Author_ID),
    FOREIGN KEY (Metadata_ID) REFERENCES Metadata(Metadata_ID)
);

CREATE TABLE Act (
    Act_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Script_ID INTEGER,
    Act_Number INTEGER NOT NULL,
    Synopsis TEXT,
    Notes TEXT,
    FOREIGN KEY (Script_ID) REFERENCES Script(Script_ID)
);

CREATE TABLE Scene (
    Scene_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Act_ID INTEGER,
    Scene_Number INTEGER NOT NULL,
    Synopsis TEXT,
    Notes TEXT,
    FOREIGN KEY (Act_ID) REFERENCES Act(Act_ID)
);

CREATE TABLE Character (
    Character_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Script_ID INTEGER,
    Name TEXT NOT NULL,
    Description TEXT,
    FOREIGN KEY (Script_ID) REFERENCES Script(Script_ID)
);

CREATE TABLE Dialogue (
    Dialogue_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Scene_ID INTEGER,
    Character_ID INTEGER,
    Original_Text TEXT,
    Modernized_Text TEXT,
    FOREIGN KEY (Scene_ID) REFERENCES Scene(Scene_ID),
    FOREIGN KEY (Character_ID) REFERENCES Character(Character_ID)
);

CREATE TABLE Action (
    Action_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Scene_ID INTEGER,
    Character_ID INTEGER,
    Original_Text TEXT,
    Modernized_Text TEXT,
    FOREIGN KEY (Scene_ID) REFERENCES Scene(Scene_ID),
    FOREIGN KEY (Character_ID) REFERENCES Character(Character_ID)
);

CREATE TABLE Transition (
    Transition_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Scene_ID INTEGER,
    Transition_Text TEXT,
    FOREIGN KEY (Scene_ID) REFERENCES Scene(Scene_ID)
);

CREATE TABLE Parenthetical (
    Parenthetical_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Dialogue_ID INTEGER,
    Original_Text TEXT,
    Modernized_Text TEXT,
    FOREIGN KEY (Dialogue_ID) REFERENCES Dialogue(Dialogue_ID)
);

CREATE TABLE Note (
    Note_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Script_ID INTEGER,
    Type TEXT,
    Text TEXT,
    FOREIGN KEY (Script_ID) REFERENCES Script(Script_ID)
);

CREATE TABLE CenteredText (
    Centered_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Script_ID INTEGER,
    Text TEXT,
    FOREIGN KEY (Script_ID) REFERENCES Script(Script_ID)
);

CREATE TABLE PageBreak (
    Page_Break_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Script_ID INTEGER,
    Page_Number INTEGER,
    FOREIGN KEY (Script_ID) REFERENCES Script(Script_ID)
);

CREATE TABLE SectionHeading (
    Section_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Script_ID INTEGER,
    Text TEXT,
    FOREIGN KEY (Script_ID) REFERENCES Script(Script_ID)
);

CREATE TABLE TitlePage (
    Title_Page_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Script_ID INTEGER,
    Text TEXT,
    FOREIGN KEY (Script_ID) REFERENCES Script(Script_ID)
);

CREATE TABLE Casting (
    Casting_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Character_ID INTEGER,
    Actor_Characteristics_Choices TEXT,
    FOREIGN KEY (Character_ID) REFERENCES Character(Character_ID)
);

CREATE TABLE CharacterRelationship (
    Relationship_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Character1_ID INTEGER,
    Character2_ID INTEGER,
    Relationship_Type TEXT,
    FOREIGN KEY (Character1_ID) REFERENCES Character(Character_ID),
    FOREIGN KEY (Character2_ID) REFERENCES Character(Character_ID)
);

CREATE TABLE MusicSound (
    Music_Sound_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Scene_ID INTEGER,
    Cue TEXT,
    Description TEXT,
    FOREIGN KEY (Scene_ID) REFERENCES Scene(Scene_ID)
);

CREATE TABLE Props (
    Prop_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Scene_ID INTEGER,
    Description TEXT,
    FOREIGN KEY (Scene_ID) REFERENCES Scene(Scene_ID)
);

CREATE TABLE RevisionHistory (
    Revision_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Script_ID INTEGER,
    Date DATE,
    Change_Description TEXT,
    Editor TEXT,
    FOREIGN KEY (Script_ID) REFERENCES Script(Script_ID)
);

CREATE TABLE FormattingRules (
    Rule_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Script_ID INTEGER,
    Rule_Description TEXT,
    FOREIGN KEY (Script_ID) REFERENCES Script(Script_ID)
);

CREATE TABLE CrossReferences (
    Cross_Reference_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Scene_ID INTEGER,
    Referenced_Scene_ID INTEGER,
    Description TEXT,
    FOREIGN KEY (Scene_ID) REFERENCES Scene(Scene_ID),
    FOREIGN KEY (Referenced_Scene_ID) REFERENCES Scene(Scene_ID)
);

CREATE TABLE ExtendedNotesResearch (
    Research_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Script_ID INTEGER,
    Notes TEXT,
    Research_Details TEXT,
    FOREIGN KEY (Script_ID) REFERENCES Script(Script_ID)
);

CREATE TABLE SceneLocation (
    Location_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Description TEXT NOT NULL,
    Historical_Cultural_Significance TEXT
);

