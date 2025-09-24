function App() {
  const konular = [
    { isim: "Phishing", aciklama: "Sahte e-postalarla bilgi çalmaya çalışma." },
    { isim: "Malware", aciklama: "Bilgisayara zarar veren kötü yazılım." },
    { isim: "Firewall", aciklama: "Ağ trafiğini kontrol eden güvenlik duvarı." }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "2rem" }}>
      <h1>Merhaba, Ben Rabia</h1>
      <p>Siber güvenlik hakkında temel bilgiler paylaşacağım.</p>
      
      <h2>Temel Siber Güvenlik Konuları</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {konular.map((k, i) => (
          <li key={i} style={{ margin: "1rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
            <strong>{k.isim}</strong>
            <p>{k.aciklama}</p>
          </li>
        ))}
      </ul>

      <h2>İletişim</h2>
      <p>Mail: r3ozcan@gmail.com</p>
    </div>
  );
}

export default App;
