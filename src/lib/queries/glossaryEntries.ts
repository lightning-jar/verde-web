// get glossary entries

export const glossaryEntriesQuery0To100 = `
query glossaryEntries {
  glossaryEntries(first: 100, orderBy: term_ASC) {
    term
    definition
  }
}
`;
export const glossaryEntriesQuery100To200 = `
query glossaryEntries {
  glossaryEntries(first: 200, skip:100, orderBy: term_ASC) {
    term
    definition
  }
}
`;
