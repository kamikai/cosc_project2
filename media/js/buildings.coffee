
class Level
# Single 'floor' of a building. Stores a color (texture later?).
  constructor: (@color) ->
    geo = THREE.BoxGeometry(0.75, 0.75, 1)
    mat = THREE.Material.MeshPhongMaterial({color: @color})
    @model = THREE.Mesh(geo, mat)


class LevelCollection
# Vertical collection of levels. Height of levels determined by index in levels array.
  constructor: (@x, @y, @levels) ->


class Building
# Contiguous set of LevelCollections
  constructor: (@cells) ->

  getModel: ->
