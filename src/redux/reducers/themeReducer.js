export default function (state = '#f5f5f5', action) {
     switch (action.type) {
         case "#f5f5f5":
             return state = "#050505";
         case "#050505":
             return state = "#f5f5f5";

         default:
             return state;
     }
}