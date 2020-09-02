module.exports = (oldMember, newMember) => {

  console.log(`${newMember} Changed`);

  const newRole = newMember.roles.cache
    .filter(r => !oldMember.roles.cache.has(r.id))
    .first()

  if(newRole) console.log(`${newRole} was added!`);
  
};