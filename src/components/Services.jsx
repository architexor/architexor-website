import './Services.css'

const Services = () => {
  const services = [
    {
      category: 'Architectural Design',
      icon: '🏗️',
      items: [
        'Interior Design',
        'Exterior Design',
        'Conceptual Design',
        'Space Planning',
        '3D Visualization',
        'Design Development',
        'Construction Documents'
      ]
    },
    {
      category: 'Structural Engineering',
      icon: '⚙️',
      items: [
        'Structural Analysis',
        'Foundation Design',
        'Seismic Design',
        'Steel & Concrete Design',
        'Load Calculations',
        'Building Code Compliance',
        'Structural Inspections'
      ]
    },
    {
      category: 'AEC Industry Services',
      icon: '🏢',
      items: [
        'Project Management',
        'Construction Administration',
        'Building Information Modeling (BIM)',
        'Quantity Takeoffs',
        'Cost Estimation',
        'Sustainability Consulting',
        'LEED Certification',
        'Facility Management',
        'Site Planning',
        'Urban Planning',
        'Landscape Architecture',
        'MEP Coordination'
      ]
    },
    {
      category: 'AutoCAD & Revit Plugins',
      icon: '🔌',
      items: [
        'Custom AutoCAD Plugins',
        'Revit API Development',
        'Automation Tools',
        'Workflow Optimization',
        'Data Extraction Tools',
        'Custom Commands & Macros',
        'Integration Solutions'
      ]
    },
    {
      category: 'BIM Software Development',
      icon: '💻',
      items: [
        'BIM Model Development',
        'Clash Detection',
        '4D/5D BIM',
        'BIM Standards Implementation',
        'Model Coordination',
        'BIM Consulting',
        'Custom BIM Solutions'
      ]
    },
    {
      category: 'Website Development',
      icon: '🌐',
      items: [
        'Portfolio Websites',
        'Business Websites',
        'E-commerce Solutions',
        'Web Applications',
        'Responsive Design',
        'Modern UI/UX',
        'Full-Stack Development'
      ]
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions for all your AEC industry needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.category}</h3>
              <ul className="service-list">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
