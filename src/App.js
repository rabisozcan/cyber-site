import React from "react";
import "antd/dist/reset.css";
import { Card, Typography, Row, Col, Tag, Divider } from "antd";
import { 
  SecurityScanOutlined, 
  LockOutlined, 
  BugOutlined, 
  EyeInvisibleOutlined,
  CodeOutlined,
  GlobalOutlined,
  
  FireOutlined,
  
  DatabaseOutlined
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

function App() {
  // Pastel renk paleti
  const colorPalette = {
    primary: "#667eea",
    secondary: "#764ba2",
    success: "#9f7aea",
    info: "#4299e1",
    warning: "#ed8936",
    danger: "#fc8181",
    light: "#f7fafc",
    dark: "#44649BFF"
  };

  const konular = [
    {
  isim: "GenAI Destekli Phishing",
  aciklama: "ChatGPT ve diğer GenAI araçlarıyla oluşturulan ultra-gerçekçi phishing kampanyaları. Deepfake sesler ve kişiselleştirilmiş sosyal mühendislik saldırıları.",
  detay: "AI destekli phishing saldırıları %1265 artış gösterdi. Başarı oranı %54'e yükseldi (geleneksel phishing %12).",
  icon: <SecurityScanOutlined />,
  renk: colorPalette.danger,
  etiketler: ["GenAI Phishing", "Deepfake", "AI Sosyal Mühendislik"]
},
    { 
      isim: "Ransomware-as-a-Service", 
      aciklama: "Abonelik modeli ile sunulan ransomware hizmetleri. Teknik bilgisi olmayan suçluların bile gelişmiş ransomware saldırıları düzenlemesini sağlıyor.",
      detay: "2024'te organizasyonların %59'u ransomware saldırısına uğradı. RaaS modeli suç ekonomisini demokratikleştirdi.",
      icon: <BugOutlined />,
      renk: colorPalette.warning,
      etiketler: ["RaaS", "Double Extortion", "Crypto Payments"]
    },
    { 
      isim: "AI-Powered Firewall", 
      aciklama: "Makine öğrenmesi ve yapay zeka destekli yeni nesil güvenlik duvarları. Behavioral analysis ve zero-day saldırı tespiti yetenekleri.",
      detay: "AI destekli firewall'lar bilinmeyen tehditleri %95 doğrulukla tespit ediyor. Adaptive security rules otomatik güncelleniyor.",
      icon: <FireOutlined/>,
      renk: colorPalette.info,
      etiketler: ["AI Firewall", "Behavioral Analysis", "Adaptive Security"]
    },
    { 
      isim: "Post-Quantum Cryptography", 
      aciklama: "Kuantum bilgisayarların mevcut şifreleme algoritmalarını kırma tehdidine karşı geliştirilen yeni şifreleme standardları.",
      detay: "NIST 2024'te post-quantum şifreleme standartlarını finalize etti. 2030'a kadar migration planları kritik hale geldi.",
      icon: <LockOutlined />,
      renk: colorPalette.success,
      etiketler: ["PQC", "NIST Standards", "Quantum-Safe"]
    },
    { 
      isim: "Red Team AI Simulations", 
      aciklama: "AI destekli red team operasyonları ve automated penetration testing. Continuous security validation ve threat simulation.",
      detay: "AI-powered pentest tools, manuel testlerin 10 katı hızında güvenlik açığı tespit ediyor. Sürekli güvenlik doğrulama mandatory hale geldi.",
      icon: <EyeInvisibleOutlined />,
      renk: colorPalette.secondary,
      etiketler: ["AI Red Team", "Automated Pentest", "Continuous Validation"]
    },
    { 
      isim: "Zero Trust Network Access", 
      aciklama: "Identity-centric güvenlik modeli ile mikro-segmentasyon. Her erişim talebi için real-time risk assessment ve adaptive authentication.",
      detay: "2025'te Fortune 500 şirketlerinin %78'i ZTNA implementasyonunu tamamladı. Remote work güvenliği için critical control.",
      icon: <GlobalOutlined />,
      renk: colorPalette.primary,
      etiketler: ["ZTNA", "Identity-Centric", "Adaptive Auth"]
    },
    { 
      isim: "AI-SOC Operations", 
      aciklama: "Yapay zeka destekli güvenlik operasyon merkezleri. Automated threat hunting, incident response ve predictive analytics.",
      detay: "Modern AI-SOC'lar threat detection time'ı %90 azalttı. Autonomous incident response ve self-healing security systems.",
      icon: <DatabaseOutlined />,
      renk: colorPalette.dark,
      etiketler: ["AI-SOC", "Autonomous Response", "Predictive Analytics"]
    },
    { 
      isim: "API Security Mesh", 
      aciklama: "Microservices mimarisinde API güvenliği için distributed security mesh. Runtime API protection ve zero-trust API gateway'ler.",
      detay: "Organizasyonların %53'ü API bot saldırılarına maruz kaldı. API security mesh, service-to-service communication'u secure ediyor.",
      icon: <CodeOutlined />,
      renk: colorPalette.warning,
      etiketler: ["API Mesh", "Runtime Protection", "Service Mesh Security"]
    }
  ];

  const cardStyle = {
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    border: "none",
    transition: "all 0.3s ease",
    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)"
  };

  const hoverStyle = {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
  };

  return (
    <div style={{ 
      padding: "2rem", 
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Header Section */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <Title 
          level={1} 
          style={{ 
            color: "white", 
            marginBottom: "0.5rem",
            fontWeight: 700,
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
          }}
        >
          🔒 AI Çağında Siber Güvenlik Rehberi
        </Title>
        <Paragraph style={{ 
          color: "rgba(255,255,255,0.9)", 
          fontSize: "1.2rem",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          GenAI tehditleri, quantum-safe cryptography ve yeni nesil teknolojileri keşfedin

        </Paragraph>
      </div>
{/* Stats Section - Updated for 2024-2025 */}
<Row gutter={[16, 16]} justify="center" style={{ marginBottom: "3rem" }}>
  <Col xs={12} sm={6}>
    <div style={{ 
      background: "rgba(255,255,255,0.1)", 
      padding: "1rem", 
      borderRadius: "12px",
      textAlign: "center",
      backdropFilter: "blur(10px)"
    }}>
      <Title level={3} style={{ color: "white", margin: 0 }}>1,265%</Title>
      <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
        Son 2 yılda GenAI phishing artışı<br/>
        <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>SlashNext 2024</span>
      </Text>
    </div>
  </Col>
  <Col xs={12} sm={6}>
    <div style={{ 
      background: "rgba(255,255,255,0.1)", 
      padding: "1rem", 
      borderRadius: "12px",
      textAlign: "center",
      backdropFilter: "blur(10px)"
    }}>
      <Title level={3} style={{ color: "white", margin: 0 }}>59%</Title>
      <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
        2024'te kuruluşların ransomware deneyimleme oranı<br/>
        <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>Sophos 2024</span>
      </Text>
    </div>
  </Col>
  <Col xs={12} sm={6}>
    <div style={{ 
      background: "rgba(255,255,255,0.1)", 
      padding: "1rem", 
      borderRadius: "12px",
      textAlign: "center",
      backdropFilter: "blur(10px)"
    }}>
      <Title level={3} style={{ color: "white", margin: 0 }}>53%</Title>
      <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
        2024'te API bot saldırılarında artış<br/>
        <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>Salt Security 2024</span>
      </Text>
    </div>
  </Col>
  <Col xs={12} sm={6}>
    <div style={{ 
      background: "rgba(255,255,255,0.1)", 
      padding: "1rem", 
      borderRadius: "12px",
      textAlign: "center",
      backdropFilter: "blur(10px)"
    }}>
      <Title level={3} style={{ color: "white", margin: 0 }}>88%</Title>
      <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
        2024 veri ihlallerinde credential theft oranı<br/>
        <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>Verizon DBIR 2024</span>
      </Text>
    </div>
  </Col>
</Row>
      {/* Konular Grid */}
      <div style={{ 
        background: "white", 
        borderRadius: "24px", 
        padding: "2rem",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
      }}>
        <Title level={2} style={{ 
          textAlign: "center", 
          color: colorPalette.dark,
          marginBottom: "2rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          2024-2025 Siber Güvenlik Trendleri
        </Title>

        <Row gutter={[24, 24]}>
          {konular.map((k, i) => (
            <Col key={i} xs={24} sm={12} lg={8} xl={6}>
              <Card 
                style={cardStyle}
                bodyStyle={{ padding: "1.5rem" }}
                hoverable
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = hoverStyle.transform;
                  e.currentTarget.style.boxShadow = hoverStyle.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = cardStyle.boxShadow;
                }}
              >
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  marginBottom: "1rem",
                  color: k.renk
                }}>
                  <span style={{ fontSize: "24px", marginRight: "12px" }}>
                    {k.icon}
                  </span>
                  <Title level={4} style={{ margin: 0, color: k.renk }}>
                    {k.isim}
                  </Title>
                </div>
                
                <Paragraph style={{ 
                  color: "#64748b", 
                  lineHeight: "1.6",
                  marginBottom: "1rem"
                }}>
                  {k.aciklama}
                </Paragraph>

                <Divider style={{ margin: "1rem 0" }} />
                
                <Text strong style={{ color: k.renk }}>2025 Trend:</Text>
                <Paragraph style={{ 
                  fontSize: "0.9rem", 
                  color: "#94a3b8",
                  marginBottom: "1rem"
                }}>
                  {k.detay}
                </Paragraph>
                
                {/* Kaynak linkini ekle */}
                <Text style={{ 
                  fontSize: "0.75rem", 
                  color: "#cbd5e0",
                  fontStyle: "italic"
                }}>
                  {i === 0 && "Kaynak: Deepstrike.io Phishing Statistics 2025"}
                  {i === 1 && "Kaynak: Sophos State of Ransomware 2024"}
                  {i === 2 && "Kaynak: Gartner Magic Quadrant for Network Firewalls 2024"}
                  {i === 3 && "Kaynak: NIST Post-Quantum Cryptography Standards 2024"}
                  {i === 4 && "Kaynak: Forrester Wave AI-Powered Security 2024"}
                  {i === 5 && "Kaynak: Okta Zero Trust Adoption Report 2024"}
                  {i === 6 && "Kaynak: IBM Security X-Force Threat Intelligence Index 2024"}
                  {i === 7 && "Kaynak: Salt Security State of API Security Q4 2024"}
                </Text>

                <div>
                  {k.etiketler.map((etiket, index) => (
                    <Tag 
                      key={index} 
                      color={k.renk} 
                      style={{ 
                        margin: "2px", 
                        border: "none",
                        borderRadius: "6px"
                      }}
                    >
                      {etiket}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Footer Section */}
      <div style={{ 
        textAlign: "center", 
        marginTop: "3rem",
        padding: "2rem",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "16px",
        backdropFilter: "blur(10px)"
      }}>
        <Title level={3} style={{ color: "white", marginBottom: "1rem" }}>
          📧 İletişim
        </Title>
        
        <a 
          href="mailto:r3ozcan@gmail.com" 
          style={{ 
            color: "white", 
            fontSize: "1.1rem",
            textDecoration: "none",
            fontWeight: 600,
            background: "rgba(255,255,255,0.2)",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            display: "inline-block",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255,255,255,0.3)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,255,255,0.2)";
            e.target.style.transform = "scale(1)";
          }}
        >
          r3ozcan@gmail.com
        </a>
        
        <Divider style={{ background: "rgba(255,255,255,0.3)", margin: "1.5rem 0" }} />
        
        <Title level={4} style={{ color: "white", marginBottom: "1rem" }}>
          📊 Kaynaklar
        </Title>
        <div style={{ 
          textAlign: "center", 
          maxWidth: "800px", 
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <Paragraph style={{ 
            color: "rgba(255,255,255,0.8)", 
            fontSize: "0.85rem", 
            lineHeight: "1.4", 
            marginBottom: "0.5rem",
            textAlign: "center",
            width: "100%"
          }}>
            • GenAI Phishing İstatistikleri: Deepstrike.io Phishing Statistics 2025
          </Paragraph>
          <Paragraph style={{ 
            color: "rgba(255,255,255,0.8)", 
            fontSize: "0.85rem", 
            lineHeight: "1.4", 
            marginBottom: "0.5rem",
            textAlign: "center",
            width: "100%"
          }}>
            • Ransomware Oranları: Sophos State of Ransomware 2024
          </Paragraph>
          <Paragraph style={{ 
            color: "rgba(255,255,255,0.8)", 
            fontSize: "0.85rem", 
            lineHeight: "1.4", 
            marginBottom: "0.5rem",
            textAlign: "center",
            width: "100%"
          }}>
            • API Güvenlik Verileri: Salt Security State of API Security Q4 2024
          </Paragraph>
          <Paragraph style={{ 
            color: "rgba(255,255,255,0.8)", 
            fontSize: "0.85rem", 
            lineHeight: "1.4", 
            marginBottom: "0.5rem",
            textAlign: "center",
            width: "100%"
          }}>
            • Credential Theft: Verizon 2024 Data Breach Investigations Report
          </Paragraph>
          <Paragraph style={{ 
            color: "rgba(255,255,255,0.8)", 
            fontSize: "0.85rem", 
            lineHeight: "1.4", 
            marginBottom: "0.5rem",
            textAlign: "center",
            width: "100%"
          }}>
            • Post-Quantum Cryptography: NIST Post-Quantum Cryptography Standards 2024
          </Paragraph>
        </div>

        <Paragraph style={{ 
          color: "rgba(255,255,255,0.7)", 
          marginTop: "2rem",
          fontSize: "0.9rem"
        }}>
          © 2025 Rabia Özcan - AI Çağında Siber Güvenlik - Tüm hakları saklıdır.
        </Paragraph>
      </div>
    </div>
  );
}

export default App;
