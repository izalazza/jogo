const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.solid,
		C3.Behaviors.Pin,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Pin.Acts.PinByImagePoint,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Platform.Exps.VectorX,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Exps.VectorY,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{jogador: 0},
	{lava: 0},
	{Sprite2: 0},
	{Sólido: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Fixar: 0},
	{Sprite5: 0},
	{Texto: 0},
	{Sprite6: 0},
	{moeda: 0},
	{fundo: 0},
	{Sprite: 0},
	{Sprite8: 0},
	{Texto2: 0},
	{Texto3: 0},
	{Botão: 0},
	{Sprite7: 0},
	{Sprite9: 0},
	{Sprite11: 0},
	{Texto4: 0}
];

self.InstanceType = {
	jogador: class extends self.ISpriteInstance {},
	lava: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	moeda: class extends self.ISpriteInstance {},
	fundo: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {},
	Texto3: class extends self.ITextInstance {},
	Botão: class extends self.IButtonInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Texto4: class extends self.ITextInstance {}
}