**storyBook**

1- Aqui inicializo pero lo que veo no es el localHost sino un entorno que me ofrece _storybook_
2- voy a crear en **src** un folder llamado componentes donde pondre todos los componentes que quiero crear.
3- voy al folder stories y sigo la estructura del folder componentes ya creado, aquí en stories crere un folder llamado tambien componentes donde ire agregando los componentes que cree pero le agrego la palabra stories. Esta file nos ayudara a ver mi file tsx en la plataforma de _storybook_. Pero para ellos debo llevar a cabo una estructura.
4- entro al file creado con la palabra stories y uno el componente con storybook para ellos debo hacer los sigueinte:

A- el default es un objeto que contendra el title, que es como quiero que luzca mi directorio, puedo agragar varios niveles.
B- component que quiero ver en ese path determinado en el title
C- creo una instancia de mi componente
D- voy creando copias de mi instancia, cada una me aparecera como una nueva opción en en storybook y cada una puede tener caracteristicas distintas.

```
import { MyLabel } from '../../components/MyLabel';

export default {
  title: 'UI/MyLabel',
  componets: MyLabel,
};

const Template = () => <MyLabel />;

export const MyLabeBasic = Template.bind({});
export const MyLabeMedio = Template.bind({});
export const MyLabePro = Template.bind({});


```

**AGREGAR PROPS**
1- Creo una interface, en el componente como haría normalemnte en Ts.
2- Voy al MyLabel.stories.tsx y aquí esta el punto mas importante
3- Agrego las interfaces ComponentMeta<typeof MyLabel>; y ComponentStory<typeof MyLabel> lo que le dirá al **StoryBookk** que le estoy pasando.
4- Le paso al componente los argumentos
