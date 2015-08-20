# Turn Images into ASCII with NodeJS

```
 $$&&$oo;;;;;;;;!! !****                          
  *$$&!!!!!!;;!!!o$  $$o                          
      *&*!!!!!!o$&&&!                             
      !!!!oooo$$ $$        !!!!!!!!!!!!!!oo;      
      !!!o*$$$$$$$$!!!!!!!!!!!!!!!ooooooooo***;   
       !*&$$&  $$$$$$**oooo!!!ooo!!!!!!oooo*o$$!  
        $**$$ &&$&$&&$$***o*oooooooo!oo*****$*$$; 
        ;*$&$$$$&&$&&$$$$$$******o**oo***$$***$$$ 
         *$$&&$$&&$$$$$$$$$$****o*****$*$$$$$$$$$ 
         o$$$$$&&&$$$$$$$$$$$$$$****$$$$$$$$$$$$$ 
         o*$$&&&&$&$$$$$$$$$$$$$$$*$$$$$$$$$$$$$$ 
         oo$$$$$$$$$&$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 
          **$*$$$$$&$$&$$$$$&&$$$$$$$$$$$&$$&$$&$ 
          !**$$$$$$$$$$$$$$$$&$$$$$$$$$$$&&$$$$$$$
            ****$*$*$$$$$$$$$$$$$$$$$  *&&&o$$$$&&
             $$&&&   ;*$$$$$               ;$$$$&&
             $$$&&    *$$$$$              &o $$$&&
             ;   o    $$$&$                * $&&&*
             $  &      &&$                   &&&$!
             $$$       $$&&                 ;&    
            $$&&o      $$$&                 $   ; 
            && &       $&  &                   &  
           *$ &        $                          
           o;          $&&                        
```                                               


## To install/run:

### Directly on OSX

Follow instructions from [node-canvas](https://github.com/Automattic/node-canvas/).

Then:

```sh
npm install
cd app/sheep/
node sheep.js
```

### Inside a docker container

```sh
docker build -t asciiTest
docker run -p 80:80 ascii &
```
