set :css_dir, "stylesheets"
set :js_dir, "javascripts"
set :images_dir, "images"
set :relative_links, false

sprockets.append_path File.join root, "vendor/assets/bower"
sprockets.import_asset "jquery/dist/jquery.js"

page "/components/*", layout: "docs"
page "/vision.html", layout: "page"
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
