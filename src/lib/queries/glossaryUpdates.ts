//!! gets latest 10 updates to the glossary
export const latestGlossaryEntryUpdates = `
query LatestGlossaryEntryUpdates {
  glossaryEntries(first: 10, orderBy: updatedAt_DESC) {
    updatedAt
    id
    term
    definition
  }
}

`;
export default latestGlossaryEntryUpdates;
