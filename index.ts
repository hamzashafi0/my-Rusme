function toggleSection(sectionId:string): void{
    const section = document.getElementById(sectionId);
    if(section){
        if(section.style.display === "none") {
            section.style.display = "block"
        } else {
            section.style.display = "none"
        }
    }
}
document.getElementById('toggle-skills')?.addEventListener('click', () => {
    toggleSection('skills');
});
document.getElementById('toggle-education')?.addEventListener('click', () => {
    toggleSection('education');
});
document.getElementById('toggle-experience')?.addEventListener('click', () => {
    toggleSection('experience');
});
