set :css_dir, "stylesheets"
set :js_dir, "javascripts"
set :images_dir, "images"
set :relative_links, false

sprockets.append_path File.join root, "vendor/assets/bower"
sprockets.import_asset "jquery/dist/jquery.js"
sprockets.import_asset "bootstrap-switch/dist/js/bootstrap-switch.min.js"
sprockets.import_asset "bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css"
sprockets.import_asset "quill/dist/quill.min.js"
sprockets.import_asset "quill/dist/quill.snow.css"
sprockets.import_asset "seiyria-bootstrap-slider/dist/bootstrap-slider.min.js"
sprockets.import_asset "seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css"
sprockets.import_asset "sortable/js/sortable.min.js"
sprockets.import_asset "sortable/css/sortable-theme-bootstrap.css"
sprockets.import_asset "bootstrap-select/dist/css/bootstrap-select.min.css"
sprockets.import_asset "bootstrap-select/dist/js/bootstrap-select.min.js"
sprockets.import_asset "chosen/chosen.jquery.min.js"
sprockets.import_asset "chosen/chosen.min.css"

page "/design/*", layout: "docs"
page "/about.html", layout: "page"
page "/roadmap.html", layout: "page"

activate :autoprefixer do |config|
  config.browsers = ["last 2 versions", "Explorer >= 9"]
end

activate :directory_indexes
activate :syntax

configure :build do
  activate :minify_css
  activate :minify_javascript
  set :http_prefix, "/brandbook/"
end
