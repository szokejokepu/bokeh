import {Model} from "./model";
import {Component} from "./component";
import {Range} from "./ranges";
import {DataSource} from "./sources";
import {Glyph} from "./glyphs";
import {Renderer,GlyphRenderer} from "./renderers";
import {Tool,ToolEvents} from "./tools";
import {Location,Logo,Place} from "../enums";
import {Int,Color} from "../types";

export interface Plot extends Component {
    title: string;

    //title = include[TextProps]
    //outline = include[LineProps]

    x_range: Range;
    y_range: Range;

    extra_x_ranges: {[key: string]: Range};
    extra_y_ranges: {[key: string]: Range};

    x_mapper_type: string;
    y_mapper_type: string;

    renderers: Array<Renderer>;
    tools: Array<Tool>;

    tool_events: ToolEvents;

    left: Array<Renderer>;
    right: Array<Renderer>;
    above: Array<Renderer>;
    below: Array<Renderer>;

    toolbar_location: Location;
    logo: Logo;

    plot_width: Int;
    plot_height: Int;

    background_fill_color: Color;
    border_fill_color: Color;

    min_border_top: Int;
    min_border_bottom: Int;
    min_border_left: Int;
    min_border_right: Int;
    min_border: Int;

    h_symmetry: boolean;
    v_symmetry: boolean;

    lod_factor: Int;
    lod_threshold: Int;
    lod_interval: Int;
    lod_timeout: Int;

    webgl: boolean;

    responsive: boolean;

    addTools(...tools: Array<Tool>): void;

    addLayout(obj: Model, place?: Place): void;

    addGlyph(glyph: Glyph): GlyphRenderer;
    addGlyph(source: DataSource, glyph: Glyph): GlyphRenderer;
}

export interface BackRef {
    plot: Plot;
}

export interface GridPlot extends Plot {
    children: Array<Array<Plot>>;
    border_space: Int;
}
