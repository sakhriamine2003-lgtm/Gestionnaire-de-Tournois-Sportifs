

const filteredParticipants = participants.filter((p) =>
  p.nom.toLowerCase().includes(search.toLowerCase())
);