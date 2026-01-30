import './Products.css'

const Products = () => {
  const products = [
    {
      id: 'atxtimber',
      name: 'ATXTimber',
      subtitle: 'Revit Timber Construction Plugin Suite',
      icon: '🏗️',
      description: 'Comprehensive suite of Autodesk Revit plugins designed to enhance timber and glulam construction workflows.',
      features: [
        'Wall & Slab Splitting',
        'Half Lap & Joint Board Connections',
        'Glulam T Connector',
        '3D Parameters Management',
        'Auto Tagging & Dimensioning'
      ],
      versions: 'Revit 2020-2025',
      category: 'Revit Plugin'
    },
    {
      id: 'atxclash',
      name: 'ATXClash',
      subtitle: 'Automated BIM Clash Resolution',
      icon: '🤖',
      description: 'AI-powered clash detection and resolution system for Building Information Modeling projects.',
      features: [
        'AI-Powered Resolution',
        'Hard & Soft Clash Detection',
        'Multi-Model Coordination',
        'ACC Integration',
        'Compliance Checking'
      ],
      versions: 'Revit 2020-2025',
      category: 'Revit Plugin'
    },
    {
      id: 'atxgeo',
      name: 'ATXGeo',
      subtitle: 'BIM-GIS Conversion Engine',
      icon: '🗺️',
      description: 'Export Revit model data to GeoJSON format for integration with mapping applications and GIS systems.',
      features: [
        'Multi-Level Export',
        'Category Filtering',
        'Geographic Transformation',
        'Room & Element Export',
        'Stair Handling'
      ],
      versions: 'Revit 2019-2025',
      category: 'Revit Plugin'
    },
    {
      id: 'atxglaze',
      name: 'ATXGlaze',
      subtitle: 'Parametric Facade & Wall Automation',
      icon: '🧱',
      description: 'Comprehensive AutoCAD plugin for automating the design, engineering, and documentation of modular wall systems.',
      features: [
        'QuickPrice & Measuring',
        'Engineering Drawings',
        'Installation Documentation',
        '50+ Wall Type Configurations',
        'Automated Drawing Generation'
      ],
      versions: 'AutoCAD 2019-2026',
      category: 'AutoCAD Plugin'
    },
    {
      id: 'atxcabinet',
      name: 'ATXCabinet',
      subtitle: 'Intelligent Joinery & Casework Automation',
      icon: '🪑',
      description: 'Web-based cabinetry design platform with AI analysis, CAD generation, and project management.',
      features: [
        'AI-Powered Analysis',
        'CAD Integration',
        '3D Visualization',
        'Project Management',
        'Template System'
      ],
      versions: 'Web Platform',
      category: 'Web Application'
    }
  ]

  return (
    <section id="products" className="products">
      <div className="products-container">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Innovative software solutions for the AEC industry
          </p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-header">
                <div className="product-icon">{product.icon}</div>
                <div className="product-title-group">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-subtitle">{product.subtitle}</p>
                </div>
              </div>
              <p className="product-description">{product.description}</p>
              <div className="product-features">
                <h4>Key Features:</h4>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="product-footer">
                <span className="product-category">{product.category}</span>
                <span className="product-versions">{product.versions}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
