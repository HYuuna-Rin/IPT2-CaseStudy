(function loadQR(){
  var img = document.getElementById('github-qr');
  if (img) {
    img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/HYuuna-Rin';
  }
})();

async function loadRepos() {
  try {
    const res = await fetch('https://api.github.com/users/HYuuna-Rin/repos?sort=updated&per_page=5');
    const repos = await res.json();
    const list = document.getElementById('repo-list');
    if (!list) return;
    list.innerHTML = '';
    if (Array.isArray(repos) && repos.length) {
      repos.forEach(r => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${r.html_url}" target="_blank">${r.name}</a> — ${r.language || 'N/A'}`;
        list.appendChild(li);
      });
    } else {
      list.textContent = 'No repositories found.';
    }
  } catch (e) {
    const list = document.getElementById('repo-list');
    if (list) list.textContent = 'Failed to load repositories.';
  }
}
loadRepos();